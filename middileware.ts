import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const sid = req.cookies.get("sid")?.value

  if (!sid && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/portal/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
