import express from 'express';
const app = express();

app.get('/', (req,res) => {
  res.send('hello');
});
app.get('/api', (req,res) => {
  res.send('firt api');
});

app.listen(8000);
