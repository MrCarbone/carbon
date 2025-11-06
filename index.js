import {Server} from 'node:http';
import {readFileSync} from 'node:fs';
import { join } from 'path';
const serve = new Server();
serve.on('request', (req, res) => {
  res.writeHead(200, {
   'content-type': 'text/html;charset=utf-8'
  });
  res.end(readFileSync(join(process.cwd(),'public','index.html'), 'utf8'));
});
serve.listen(8000);




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
