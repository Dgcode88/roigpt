import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  let res = NextResponse.next();

  // Skip middleware for static files, API routes, and other non-page requests
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.startsWith("/api") ||
    req.nextUrl.pathname.startsWith("/static") ||
    req.nextUrl.pathname.includes(".") ||
    req.nextUrl.pathname === "/favicon.ico" ||
    req.nextUrl.pathname === "/robots.txt" ||
    req.nextUrl.pathname === "/sitemap.xml" ||
    req.nextUrl.pathname === "/manifest.json"
  ) {
    return res;
  }

  try {
    // Only initialize Supabase if environment variables are available
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
          cookies: {
            getAll() {
              return req.cookies.getAll().map(({ name, value }) => ({
                name,
                value,
              }));
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value, options }) => {
                req.cookies.set(name, value);
                res.cookies.set(name, value, options);
              });
            },
          },
        },
      );

      // Refresh session if expired - required for Server Components
      await supabase.auth.getSession();
    }
  } catch (error) {
    console.error("Middleware error:", error);
    // Continue with the request even if Supabase fails
  }

  return res;
}

// Ensure the middleware is only called for relevant paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     * - api routes
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
