require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5001;

const { Client } = require('pg');
const db = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
db.connect();

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});