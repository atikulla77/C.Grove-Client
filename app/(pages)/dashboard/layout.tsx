"use client";
import DNavbar from "@/components/pages/dashboard/DNavbar";
import Loading from "@/components/shared/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const checkAuth = async () => {
      if (!API_URL) {
        setShouldRedirect(true);
        router.replace("/login");
        return;
      }

      try {
        const res = await fetch(`${API_URL}/api/v1/admin/me`, {
          method: "GET",
          credentials: "include",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          setShouldRedirect(true);
          router.replace("/login");
          return;
        }

        const data = await res.json();
        if (data.success && data.admin) {
          setAdmin(data.admin);
          setLoading(false);
        } else {
          setShouldRedirect(true);
          router.replace("/login");
        }
      } catch (error: any) {
        setShouldRedirect(true);
        router.replace("/login");
      }
    };
    checkAuth();
  }, [API_URL, router]);

  // Don't render anything while loading or redirecting
  if (loading || shouldRedirect || !admin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loading />
        <p className="mt-4 text-sm text-gray-600">Checking authentication...</p>
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
