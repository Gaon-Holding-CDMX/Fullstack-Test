import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authenticated } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userId = await authenticated(request);

  if (pathname.startsWith("/api/private") && !userId) {
    return;
  }

  if (
    (pathname.startsWith("/events") || pathname.startsWith("/my_events")) &&
    !userId
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (
    (pathname.startsWith("/login") ||
      pathname.startsWith("/register") ||
      pathname === "/") &&
    userId
  ) {
    return NextResponse.redirect(new URL("/events", request.url));
  }

  return NextResponse.next();
}
