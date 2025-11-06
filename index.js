import {Server} from 'node:http';
import {readFileSync,existsSync} from 'node:fs';
import { join } from 'path';
const serve = new Server();
serve.on('request', (req, res) => {
  if(!existsSync(j('public',req.url)) {
    res.end('');
    return;
  }
  res.writeHead(200, {
   'content-type': mime(req.url) || 'text/plain'
  });
  res.end(readFileSync(j('public',req.url), 'utf8'));
});
serve.listen(8000);

funcion mime(a) {
  return {
    '/public/style.css': 'text/css',
    '/': 'text/html;charset=utf-8',
    '/favicon.ico': 'image/x-icon'
  }[a];
}

function j(...a) {
  return join.apply(null,[process.cwd(),...a])
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
