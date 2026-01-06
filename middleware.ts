import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  return NextResponse.next(); // Let everything through
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};




// middleware.ts (root of your project)
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//   const accessToken = request.cookies.get('accessToken')?.value;
//   const { pathname } = request.nextUrl;

  // If accessing dashboard without token, redirect to login
  // if (pathname.startsWith('/dashboard') && !accessToken) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  // If has token and accessing login, redirect to dashboard
//   if (pathname === '/login' && accessToken) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/login'],
// };


// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const accessToken = request.cookies.get("accessToken")?.value;

//   // 🚫 Unauthenticated → block dashboard
//   if (pathname.startsWith("/dashboard") && !accessToken) {
//     const loginUrl = new URL("/login", request.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   // 🚫 Authenticated → block login page
//   if (pathname === "/login" && accessToken) {
//     const dashboardUrl = new URL("/dashboard", request.url);
//     return NextResponse.redirect(dashboardUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/login"],
// };
