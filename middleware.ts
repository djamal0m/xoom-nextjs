import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  // Ignore icons route for performance related to clerk middleware
  // See https://clerk.com/docs/nextjs/middleware
  ignoredRoutes: ["/icons"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
