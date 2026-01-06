"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiLayout, FiLogOut, FiUser } from "react-icons/fi";
import { LuGitPullRequestCreateArrow } from "react-icons/lu";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${API_URL}/api/v1/admin/logout`, {
        method: "POST",
        credentials: "include",
      });

      console.log("Logout response:", response.status);

      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);

      // Still redirect even if API call fails
      window.location.href = "/login";
    } finally {
      // setIsLoggingOut(false);
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
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-2 h-9 px-4 py-2 border border-slate-300 hover:bg-slate-100 justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 cursor-pointer"
            >
              <FiLogOut size={16} />
              <span> Logout </span>
            </button>

            <LogoutConfirmModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleLogout}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

interface LogoutConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const LogoutConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}: LogoutConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in zoom-in-95 duration-200">
        {/* Icon */}
        <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-red-100 mb-4">
          <svg
            className="h-7 w-7 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            Logout Confirmation
          </h3>
          <p className="text-slate-600 text-sm mb-6">
            Are you sure you want to logout? You'll need to login again to
            access your dashboard.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Logging out...
              </>
            ) : (
              "Yes, Logout"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
