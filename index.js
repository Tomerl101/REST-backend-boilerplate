const configs = require('./utils/configs');
const express = require('express');
const morgan = require('morgan');
const sport = require('./routes/sport');
const db = require('./db');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/sports', sport);
app.all('*', (req, res) => {
  res.redirect(configs.API_URL);
});

//error handling middelware
app.use(function (err, req, res, next) {
  const { status, name, message } = err;
  res.status(err.status);
  res.json({ status, name, message });
});


app.listen(configs.PORT, () => {
  console.log(`Server runing on port ${configs.PORT}`);
});