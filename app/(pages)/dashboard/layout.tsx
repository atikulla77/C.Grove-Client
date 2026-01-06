
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
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const checkAuth = async () => {
      console.log("=== Dashboard Auth Check ===");
      console.log("API_URL:", API_URL);
      
      if (!API_URL) {
        setError("API_URL not configured");
        console.error("NEXT_PUBLIC_API_URL is not set!");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching:", `${API_URL}/api/v1/admin/me`);
        
        const res = await fetch(`${API_URL}/api/v1/admin/me`, {
          method: "GET",
          credentials: "include",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", res.status);
        console.log("Response ok:", res.ok);

        if (!res.ok) {
          console.log("Not authenticated, redirecting to login");
          router.replace("/login");
          return;
        }

        const data = await res.json();
        console.log("Admin data:", data);

        if (data.success && data.admin) {
          setAdmin(data.admin);
        } else {
          setError("Invalid response format");
          router.replace("/login");
        }
      } catch (error: any) {
        console.error("=== Auth Check Error ===");
        console.error("Error:", error);
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
        setError(error.message);
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loading />
        <p className="mt-4 text-sm text-gray-600">Checking authentication...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-semibold mb-2">Error</h2>
          <p className="text-red-600 text-sm">{error}</p>
          <p className="text-xs text-gray-500 mt-2">Check console for details</p>
        </div>
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