require('dotenv').config();
const configs = {};

configs.DB_URL = process.env.DB_URL;
configs.DB_USER = process.env.DB_USER;
configs.DB_PASS = process.env.DB_PASS;
configs.PORT = process.env.PORT || 8080;
configs.API_URL = `https://documenter.getpostman.com/view/5598676/RznBMfMq#320c0b30-799b-40eb-b736-94dbea0c3612`;

module.exports = configs;