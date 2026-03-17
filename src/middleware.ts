import { defineMiddleware } from 'astro:middleware';

// Enforce Tamil as default root language consistently.
export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname === '/') {
    return context.redirect('/ta', 302);
  }
  return next();
});
