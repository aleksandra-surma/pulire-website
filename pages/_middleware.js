import { NextResponse } from 'next/server';

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  switch (pathname) {
    case '/about':
      NextResponse.redirect('/o-nas');
      break;

    case '/oferta':
      NextResponse.redirect('/offer');
      break;

    case '/kontakt':
      NextResponse.redirect('/contact');
      break;

    default:
      NextResponse.next();
  }
}
