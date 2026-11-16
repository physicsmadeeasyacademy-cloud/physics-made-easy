import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // 1. Enforce www canonical domain
  const host = req.headers.get("host") || "";
  if (host === "makephysicseasy.com") {
    const newUrl = req.nextUrl.clone();
    newUrl.host = "www.makephysicseasy.com";
    return NextResponse.redirect(newUrl, 301);
  }

  const { pathname } = req.nextUrl;

  // 2. Skip NextAuth routes
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // 3. Skip UploadThing Route
  // UploadThing sends a POST webhook to this URL. It has no session cookies,
  // so we must allow it to pass through. Internal security is handled by UploadThing's secret.
  if (pathname.startsWith("/api/uploadthing")) {
    return NextResponse.next();
  }

  const isAdminPath = pathname.startsWith("/admin");
  const isApiMutation =
    pathname.startsWith("/api") &&
    ["POST", "PUT", "DELETE"].includes(req.method);

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if ((isAdminPath || isApiMutation) && !token) {
    if (pathname.startsWith("/api")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL("/login", req.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, og files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};