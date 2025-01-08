import {NextRequest, NextResponse} from 'next/server';
import {getToken} from 'next-auth/jwt';

const protectedPaths: string[] = ['/about'];
const authPaths: string[] = ['/register', '/signin'];

export const middleware = async (req: NextRequest) => {
  const {pathname} = req.nextUrl;
  const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET});

  if (token && authPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!token && protectedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    ...protectedPaths,
    ...authPaths
  ],
};