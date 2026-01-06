"use client";
import Loading from "@/components/shared/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const res = await fetch(`${API_URL}/api/v1/admin/me`, {
          credentials: "include",
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache",
          },
        });

        if (res.ok) {
          router.replace("/dashboard");
          return;
        }
      } catch (error) {
        console.error("Auth check error:", error);
      } finally {
        setCheckingAuth(false);
      }
    };

    checkLoggedIn();
  }, [API_URL, router]);

  if (checkingAuth) {
    return <Loading />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/v1/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Optional: Store in localStorage as backup
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }

      toast.success(data.message || "Login successful!");
      router.replace("/dashboard");
    } catch (err: any) {
      console.error("Login error:", err);
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 font-poppins">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm border border-slate-200">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-600">Login to access your dashboard</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email Address
            </p>
            <input
              id="email"
              type="email"
              value={email}
              placeholder={"Enter Your Email Address"}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="flex h-11 w-full rounded-md border border-[#00000024] focus:border-slate-700 bg-transparent px-3 py-1 shadow-[0_1px_2px_0_#0000000d] focus:outline-none focus:ring-0 ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base"
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
            </p>
            <input
              id="password"
              type="Password"
              placeholder={"Password"}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="flex h-11 w-full rounded-md border border-[#00000024] focus:border-slate-700 bg-transparent px-3 py-1 shadow-[0_1px_2px_0_#0000000d] focus:outline-none focus:ring-0 ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base"
            />
          </div>

          <div className="w-full flex justify-center ">
            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-all duration-500 cursor-pointer"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
