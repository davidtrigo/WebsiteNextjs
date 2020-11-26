// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}


import nextConnect from "next-connect";
import multer from 'multer';
const handler = nextConnect();
handler.use(multer().any());
handler.post((req,res)=>{
    console.log(req);
    res.end('Hello');
})
export const config = {
    api: {
      bodyParser: false,
    },
  }
//export default handler;