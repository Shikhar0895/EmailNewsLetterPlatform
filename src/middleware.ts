import { auth, clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse, NextFetchEvent } from "next/server";

function corsmiddleware(req: NextRequest) {
  // Create a response object for OPTIONS requests or a default response for others
  // clerkMiddleware();
  let response =
    req.method === "OPTIONS"
      ? new NextResponse(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_WEBSITE_URL}`, // Adjust as necessary
            "Access-Control-Allow-Methods":
              "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        })
      : NextResponse.next();

  // Ensure CORS headers are applied to all responses, not just OPTIONS
  if (req.method !== "OPTIONS") {
    response.headers.set(
      "Access-Control-Allow-Origin",
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}`
    );
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

export default clerkMiddleware((auth, req) => {
  return corsmiddleware(req);
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
