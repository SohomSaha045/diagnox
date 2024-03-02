import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const apiSession = request.cookies.get("appSession")?.value;
  if (apiSession === undefined) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/details"]
};

