import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse, NextFetchEvent } from "next/server";

function corsmiddleware(req: NextRequest, event: NextFetchEvent) {
  // Create a response object for OPTIONS requests or a default response for others
  // clerkMiddleware();
  let response =
    req.method === "OPTIONS"
      ? new NextResponse(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*", // Adjust as necessary
            "Access-Control-Allow-Methods":
              "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        })
      : NextResponse.next();

  // Ensure CORS headers are applied to all responses, not just OPTIONS
  if (req.method !== "OPTIONS") {
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
  }

  return response;
}

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
