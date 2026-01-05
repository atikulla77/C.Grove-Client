"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleLogout = async () => {
    await fetch(`${API_URL}/api/v1/admin/logout`, {
      method: "POST",
      credentials: "include",
    });
    router.push("/login");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>You are authenticated 🎉</p>

      <button
        onClick={handleLogout}
        className="w-fit px-8 h-10.5 text-white bg-[#171717] rounded-full mt-3"
      >
        Logout
      </button>
      <Link href={"/dashboard/portfolio"}>
        <button className="w-fit px-8 h-10.5 text-white bg-[#171717] rounded-full mt-3">
          Go To Portfolio
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
