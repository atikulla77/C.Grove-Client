"use client";
import DNavbar from "@/components/pages/dashboard/DNavbar";
import Loading from "@/components/shared/loading";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const CHECK_INTERVAL = 10_000; // 30 seconds

export default function DashboardLayoutDebug({
  children,
}: {
  children: React.ReactNode;
}) {
   const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState<any>(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const isRefreshing = useRef(false);

  const redirectToLogin = () => {
    setShouldRedirect(true);
    router.replace("/login");
  };

  const refreshToken = async () => {
    if (!API_URL || isRefreshing.current) return false;

    isRefreshing.current = true;

    try {
      const res = await fetch(`${API_URL}/api/v1/admin/refresh`, {
        method: "POST",
        credentials: "include",
        cache: "no-store",
      });

      return res.ok;
    } catch {
      return false;
    } finally {
      isRefreshing.current = false;
    }
  };

  const checkAuth = async () => {
    if (!API_URL) {
      redirectToLogin();
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/v1/admin/me`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
      });

      // ✅ ACCESS TOKEN EXPIRED
      if (res.status === 401) {
        const refreshed = await refreshToken();

        if (!refreshed) {
          redirectToLogin();
          return;
        }

        // 🔁 retry /me after refresh
        return checkAuth();
      }

      if (!res.ok) {
        redirectToLogin();
        return;
      }

      const data = await res.json();

      if (data?.success && data?.admin) {
        setAdmin(data.admin);
        setLoading(false);
      } else {
        redirectToLogin();
      }
    } catch {
      redirectToLogin();
    }
  };

  useEffect(() => {
    checkAuth();
    const interval = setInterval(checkAuth, CHECK_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // 🔒 BLOCK UI FLASH
  if (loading || shouldRedirect || !admin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loading />
        <p className="mt-4 text-sm text-gray-600">
          Checking authentication...
        </p>
      </div>
    );
  }
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <DNavbar />
      <div className="mt-16">{children}</div>
    </div>
  );
}
