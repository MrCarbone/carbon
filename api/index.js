export default {
  fetch(request: Request) {
    const url = new URL(request.url):
    if(url.pathname === 'a') {
      return new Response('Hello from Vercel!');
    }
    return new Response('Hello from Vercel!');
  },
};
