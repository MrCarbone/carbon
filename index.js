import {Server} from 'node:http';
import {readFileSync} from 'node:fs';
import { join } from 'path';
const serve = new Server();
serve.on('request', (req, res) => {
  res.writeHead(200, {
   'content-type': mime(req.url) || 'text/plain'
  });
  res.end(readFileSync(join(process.cwd(),'public','index.html'), 'utf8'));
});
serve.listen(8000);

funcion mime(a) {
  return {
    '/public/style.css': 'text/css',
    '/': 'text/html;charset=utf-8',
    '/favicon.ico': 'image/x-icon'
  }[a];
}


/*import express from 'express';
const app = express();

app.get('/', (req,res) => {
  res.send('hello');
});
app.get('/api', async (req,res) => {
  const request = await fetch('https://time.ir');
  const response = await request.text();
  res.send(response);
});

app.listen(8000);
*/
