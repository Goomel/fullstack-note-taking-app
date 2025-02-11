import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const isAuthPage = ["/signin", "/signup"].includes(req.nextUrl.pathname);

    // If user is logged in and tries to go to /signin or /signup → redirect to /dashboard
    if (isAuthPage && req.nextauth.token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // Non-logged-in users have access to /signin and /signup, but not to protected pages
        if (!token && req.nextUrl.pathname === "/dashboard") return false;
        return true;
      },
    },
  },
);

export const config = {
  matcher: ["/dashboard", "/signin", "/signup"],
};
