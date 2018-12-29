const { parsed: configs } = require('dotenv').config();
configs.DB_URL = configs.DB_URL || process.env.DB_URL;
configs.DB_USER = configs.DB_USER || process.env.DB_USER;
configs.DB_PASS = configs.DB_PASS || process.env.DB_PASS;
module.exports = configs;