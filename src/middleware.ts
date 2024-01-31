import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("token")?.value;
  if (request.nextUrl.pathname.startsWith("/")) {
    return NextResponse.next();
  }
  if (currentUser) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_LEGACY_APP_URL}login.asp`
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
