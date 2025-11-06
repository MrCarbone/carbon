import {Server} from 'node:https';
const serve = new Server();
serve.on('request', (req, res) => {
  res.end('hiiiiiii');
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
