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

//error handling middelware
app.use(function (err, req, res, next) {
  res.status(500);
  res.send(err);
});


app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});