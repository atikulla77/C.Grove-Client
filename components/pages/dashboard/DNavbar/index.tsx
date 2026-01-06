"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiLayout, FiLogOut, FiUser } from "react-icons/fi";
import { LuGitPullRequestCreateArrow } from "react-icons/lu";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      
      // Call API to clear cookies server-side
      const response = await fetch(`${API_URL}/api/v1/admin/logout`, {
        method: 'POST',
        credentials: 'include', // Send cookies to API
      });

      console.log('Logout response:', response.status);

      // Redirect regardless of API response
      // Use window.location for hard refresh to clear all state
      window.location.href = '/login';
      
    } catch (error) {
      console.error('Logout error:', error);
      
      // Still redirect even if API call fails
      window.location.href = '/login';
    } finally {
      setIsLoggingOut(false);
    }
  };
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full bg-white border-b border-slate-200 font-Inter fixed top-0 left-0 z-9999">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-semibold text-slate-900 select-none cursor-pointer">
            <Link href={"/dashboard"}>Admin Dashboard</Link>
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/dashboard/create")}
              className={`flex items-center space-x-2 ${
                isActive("/dashboard/create")
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              } h-9 px-4 py-2 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 cursor-pointer`}
            >
              <LuGitPullRequestCreateArrow size={18} />
              <span>Create</span>
            </button>
            <button
              onClick={() => router.push("/dashboard/gallery")}
              className={`flex items-center space-x-2 ${
                isActive("/dashboard/gallery")
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              } h-9 px-4 py-2 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 cursor-pointer`}
            >
              <FiLayout size={18} />
              <span>Gallery</span>
            </button>

            <button
              onClick={() => router.push("/dashboard/portfolio")}
              className={`flex items-center space-x-2 ${
                isActive("/dashboard/portfolio")
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              } h-9 px-4 py-2 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 cursor-pointer`}
            >
              <FiUser size={18} />
              <span>Portfolio</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 h-9 px-4 py-2 border border-slate-300 hover:bg-slate-100 justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 cursor-pointer"
            >
              <FiLogOut size={16} />
              <span> Logout </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
