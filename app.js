const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let hyps = [];

app.post('/sendTypes', (req, res) => {
  const data = req.body;
  hyps = data;
  console.log('Receved', data);
  res.send(`Receved ${data}`);
});

app.get('/getTypes', (req, res) => {
  res.send(hyps);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
