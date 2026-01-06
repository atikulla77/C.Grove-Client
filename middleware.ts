import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  return NextResponse.next(); // Let everything through
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};