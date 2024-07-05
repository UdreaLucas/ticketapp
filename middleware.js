import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  console.log(req.nextauth.token);
  console.log(req.nextauth.token.role);
  console.log(req.nextUrl.pathname);

  if (
    req.nextUrl.pathname.startsWith("/app/TicketPage") &&
    req.nextauth.token.role !== "Admin"
  ) {
    return NextResponse.rewrite(new URL("/unauthorized", req.nextUrl));
  }
});
