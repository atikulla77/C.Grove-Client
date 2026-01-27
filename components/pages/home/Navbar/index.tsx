"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
  const pathname = usePathname();

  const [isSticky, setIsSticky] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    setIsSticky(window.scrollY > 10);
  };

  // ✅ Run once on mount (page reload fix)
  handleScroll();

  window.addEventListener("scroll", handleScroll);

  // ✅ Cleanup (important)
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${
        pathname === "/gallery" ? "" : "bg-white/80 backdrop-blur-md"
      } z-50 border-b ${
        isSticky
          ? pathname === "/gallery"
            ? "border-gray-200 bg-white"
            : "border-gray-200"
          : "border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center select-none">
            <div className="flex items-center text-black tracking-[-0.02em]">
              <Image
                src={"/logo_.png"}
                alt={"C.grove Logo"}
                width={244}
                height={244}
                className="w-7.5"
              />
              <span className="mt-1 -ml-px text-[17px] text-sm font-medium tracking-[0.02em]">
                G<span className="text-[#4d4d4d]">ro</span>
                <span className="text-[#808080]">ve</span>
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href={"/#about"}
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            About
          </Link>
          <Link
            href={"/#portfolio"}
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Portfolio
          </Link>
          <Link href={"/gallery"} className="">
            <span
              className={`text-sm font-medium ${
                pathname === "/gallery"
                  ? "pb-0.5 border-b-2 border-[#101828a3] text-black"
                  : "hover:text-gray-600"
              } transition-colors`}
            >
              Gallery
            </span>
          </Link>
          <Link
            href={"/#testimonials"}
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href={"/#contact"}
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
          <Link
            href={"/login"}
            target="_blank"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
