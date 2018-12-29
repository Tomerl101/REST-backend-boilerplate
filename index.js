const configs = require('./configs');
const express = require('express');
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
  res.redircet('https://documenter.getpostman.com/view/5598676/RznBMfMq#320c0b30-799b-40eb-b736-94dbea0c3612');
});

//error handling middelware
app.use(function (err, req, res, next) {
  res.status(500);
  res.send(err);
});


app.listen(configs.PORT, () => {
  console.log(`Server runing on port ${port}`);
});