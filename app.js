const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000

const allowedOrigins = ['localhost:5431']
app.use(cors({
  origin: function (origin, callback) {
    return callback(null, true);
    /*if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);*/
  }

}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let hyps = [];
let curId = 1;

app.post('/sendTypes', (req, res) => {
  const data = req.body;
  hyps = { data, id: curId++ };
  console.log('Receved', data);
  res.send(`Receved ${data}`);
});

app.get('/getTypes', (req, res) => {
  res.send(hyps);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
