import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {

  const pathname = request.nextUrl.pathname

  if (pathname.startsWith("/en") || pathname.startsWith("/pt")) {
    return NextResponse.next()
  }

  const lang = request.headers.get("accept-language") || ""

  if (lang.startsWith("pt")) {
    return NextResponse.redirect(new URL("/pt", request.url))
  }

  return NextResponse.redirect(new URL("/en", request.url))
}

export const config = {
  matcher: ["/"]
}