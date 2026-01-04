"use client";
import Loading from "@/components/shared/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [checkingAuth, setCheckingAuth] = useState(true);

  // ✅ Auth guard
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const res = await fetch("http://localhost:8081/api/v1/admin/me", {
          credentials: "include",
        });

        if (res.ok) {
          router.replace("/dashboard");
          return;
        }
      } catch {
        // backend down → stay on login
      } finally {
        setCheckingAuth(false);
      }
    };

    checkLoggedIn();
  }, []);

  // STOP RENDERING LOGIN UNTIL CHECK IS DONE
  if (checkingAuth) {
    return <Loading />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:8081/api/v1/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      router.replace("/dashboard"); // 🔥 replace here too
      setSuccess("Login successful");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoginLoading(false);
    }
  };
  if (!checkingAuth) {
    return (
      <main className="flex flex-col items-center px-5 2xl:pt-60 sm:pt-35 pt-20 h-full font-poppins">
        <div className="w-full flex justify-center pb-12.5">
          <div className="flex flex-col items-center max-w-83.75 sm:max-w-94 lg:max-w-84.25 2xl:max-w-87.5 w-full">
            <p className="text-black! 2xl:text-[30px] lg:text-[28px] sm:text-[24px] text-[20px] leading-11.25 font-medium">
              Login Form
            </p>
            <form onSubmit={handleLogin} className="max-w-87.5 w-full mt-9">
              <div>
                <div className="text-[14px] sm:text-[16px] 2xl:text-[18px] leading-6.75">
                  <p>Email</p>
                </div>
              </div>

              <div className="relative mt-2">
                <input
                  id="email"
                  type="email"
                  value={email}
                  placeholder={"Email"}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border ring-0 border-[#AEB3BC] rounded-xl bg-transparent pl-8.25 pr-10 text-defaultText outline-none focus:border-primary focus-visible:shadow-none text-[14px] sm:text-[14px] 2xl:text-[16px] h-10.5"
                />
                <div className="absolute left-2.5 top-0 h-full flex items-center">
                  <FiUser className="text-[#525252d7] text-[16px]" />
                </div>
              </div>

              <div className="text-[14px] sm:text-[16px] mt-5 2xl:text-[18px] leading-6.75">
                <p>Password</p>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder={"Password"}
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-2 border ring-0 border-[#AEB3BC] rounded-xl bg-transparent py-2 pl-2.75 pr-10 text-defaultText outline-none focus:border-primary focus-visible:shadow-none text-[14px] sm:text-[14px] 2xl:text-[16px] h-10.5"
                />
                <button
                  type="button"
                  className="absolute right-1.25 z-50 p-1 flex items-center justify-center"
                  style={{
                    top: "calc(50% + 4px)",
                    transform: "translateY(-50%)",
                  }}
                >
                  <IoEyeOutline
                    onClick={() => setShowPassword(!showPassword)}
                    className={`text-[17px] text-defaultText cursor-pointer ${
                      showPassword ? "hidden" : ""
                    }`}
                  />
                  <IoEyeOffOutline
                    onClick={() => setShowPassword(!showPassword)}
                    className={`text-[17px] text-defaultText cursor-pointer ${
                      showPassword ? "" : "hidden"
                    }`}
                  />
                </button>
              </div>

              {error && (
                <p className="text-red-500! text-[14px] mt-1.25!">{error}</p>
              )}
              {success && (
                <p className="text-green-500! text-[14px] mt-1.75!">
                  {success}
                </p>
              )}

              <div className="w-full flex justify-center 2xl:mt-8.75 lg:mt-7.5 sm:mt-11.75 mt-7.5">
                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full 2xl:h-12 lg:h-11 sm:h-11.75 h-10.5 md:text-[14px] sm3:text-[13px] text-[12px] font-medium rounded-full text-white bg-[#171717] transition-all duration-500 cursor-pointer"
                >
                  {loginLoading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
};

export default Login;
