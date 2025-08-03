import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    const { pathname } = request.nextUrl;
    const authPaths = ["/login", "/register", "/reset-password", "/forgot-password"];

    const isAuthPath = authPaths.includes(pathname);

    if (token && isAuthPath) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/login", "/register", "/reset-password", "/forgot-password"],
}
