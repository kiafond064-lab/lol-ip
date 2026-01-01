export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname === '/api/inpaint') {
      return handleInpaint(request, env);
    }
    
    return new Response('Not found', { status: 404 });
  }
};

async function handleInpaint(request, env) {
  try {
    const formData = await request.formData();
    const image = formData.get('image');
    const mask
