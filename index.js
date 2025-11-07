import {Server} from 'node:http';
import {readFileSync,existsSync} from 'node:fs';
import { join } from 'path';
const serve = new Server();
serve.on('request', (req, res) => {

  if(req.url === '/a') {
    res.end('a');
    return;
  }

  if(!existsSync(j('public',home(req.url)))) {
    res.end('');
    return;
  }
  res.writeHead(200, {
   'content-type': mime(req.url) || 'text/plain'
  });
  
  res.end(readFileSync(j('public',home(req.url)), 'utf8'));
});
serve.listen(8000);

function mime(a) {
  return {
    '/style.css': 'text/css',
    '/': 'text/html;charset=utf-8',
    '/favicon.ico': 'image/x-icon'
  }[a];
}

function j(...a) {
  return join.apply(null,[process.cwd(),...a])
}

function home(a) {
  return a==='/'?'/index.html':a;
}
