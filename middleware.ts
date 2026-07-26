import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const sid = req.cookies.get("appraisal_sid")?.value

  if (!sid) {
    if (req.nextUrl.pathname.startsWith("/appraisal/client-dashboard") ||
      req.nextUrl.pathname.startsWith("/appraisal/request-appraisal-form") ||
      req.nextUrl.pathname.startsWith("/appraisal/me")) {
      return NextResponse.redirect(new URL("/appraisal/login-register", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/appraisal/client-dashboard/:path*",
    "/appraisal/request-appraisal-form/:path*",
    "/appraisal/me/:path*"],
}
