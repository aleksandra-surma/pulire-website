// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  if (req.method === 'GET') {
    console.log('test GET next');
  }
  res.status(200).json({ name: 'John Doe' });
}
