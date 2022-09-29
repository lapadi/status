const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const publicPath = path.join(__dirname, 'build');
const dev = process.env.NODE_ENV !== 'production';

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${process.env.PORT}`);
});