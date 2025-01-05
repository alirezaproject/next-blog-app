
import { NextResponse } from "next/server";
import { middlewareAuth } from "./utils/middlewareAuth";

export async function middleware(req) {
    const url = req.url;
    const pathname = req.nextUrl.pathname;
    console.log({ pathname });

    if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
        const user = await middlewareAuth(req);
        if (user) {
            const homeUrl = new URL(`/`, url);
            return NextResponse.redirect(homeUrl);
        }
    }

    if (pathname.startsWith("/profile")) {
        const user = await middlewareAuth(req);
      
        if (!user) {
            const loginUrl = new URL(`/login?redirect=${pathname}`, url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile/:path*", "/login", "/signup"],
};
