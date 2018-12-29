require('dotenv').config();
const configs = {};

configs.DB_URL = process.env.DB_URL;
configs.DB_USER = process.env.DB_USER;
configs.DB_PASS = process.env.DB_PASS;
configs.PORT = process.env.PORT || 8080;

module.exports = configs;