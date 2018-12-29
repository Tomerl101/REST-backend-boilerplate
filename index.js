const configs = require('./configs');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 8080;
const sport = require('./routes/sport');
const db = require('./db');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/sports', sport);
app.get('*', (req, res) => {
  res.sendredircet('');
});

//error handling middelware
app.use(function (err, req, res, next) {
  res.status(500);
  res.send(err);
});


app.listen(configs.PORT, () => {
  console.log(`Server runing on port ${port}`);
});