"use client";
import DNavbar from "@/components/pages/dashboard/DNavbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const CHECK_INTERVAL = 10000; // 30 seconds
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [checking, setChecking] = useState(true);

  const validateSession = async () => {
    try {
      // Check session
      let res = await fetch(`${API_URL}/api/v1/admin/me`, {
        credentials: "include",
      });

      //  Access token expired → try refresh
      if (res.status === 401) {
        const refreshRes = await fetch(`${API_URL}/api/v1/admin/refresh`, {
          method: "POST",
          credentials: "include",
        });

        // Refresh failed → logout
        if (!refreshRes.ok) {
          router.replace("/login");
          return;
        }

        // Retry session check
        res = await fetch(`${API_URL}/api/v1/admin/me`, {
          credentials: "include",
        });

        if (!res.ok) {
          router.replace("/login");
          return;
        }
      }

      // ✅ Session valid
      setChecking(false);
    } catch (error) {
      router.replace("/login");
    }
  };

  useEffect(() => {
    validateSession();

    const interval = setInterval(validateSession, CHECK_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // 🚫 Block UI until auth confirmed
  if (checking) return null;

  return (
    <div className="w-full">
      <DNavbar />
      <div className="mt-16">{children}</div>
    </div>
  );
}
