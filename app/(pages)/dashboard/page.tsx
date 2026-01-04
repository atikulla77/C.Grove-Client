"use client";
import Loading from "@/components/shared/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      let res = await fetch("http://localhost:8081/api/v1/admin/dashboard", {
        credentials: "include",
      });

      if (res.status === 401) {
        const refreshRes = await fetch(
          "http://localhost:8081/api/v1/admin/refresh",
          {
            method: "POST",
            credentials: "include",
          }
        );

        if (!refreshRes.ok) {
          router.push("/login");
          return;
        }

        res = await fetch("http://localhost:8081/api/v1/admin/dashboard", {
          credentials: "include",
        });
      }

      if (!res.ok) {
        router.push("/login");
        return;
      }
    } catch (error) {
      console.log(`Auth check failed:`, error);
      router.push("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await fetch("http://localhost:8081/api/v1/admin/logout", {
      method: "POST",
      credentials: "include",
    });
    router.push("/login");
  };

  if (loading) return <Loading />;

  if (!loading) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>You are authenticated 🎉</p>

        <button
          onClick={handleLogout}
          className="w-fit px-8 h-10.5 md:text-[14px] sm3:text-[13px] text-[12px] font-medium rounded-full text-white bg-[#171717] transition-all duration-500 cursor-pointer mt-3"
        >
          Logout
        </button>
      </div>
    );
  }
};

export default Dashboard;
