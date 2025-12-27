const express = require('express');
const cookieParder = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const { sequelize } = require('./src/db/models');
const { root_router } = require('./src/router');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use(cookieParder());
app.use(express.urlencoded({ extended: true }));

const pathRoot = path.join(__dirname, '/public');
app.use(express.static(pathRoot));

app.use(
  cors({
    origin: ['http://localhost:3001', 'http://localhost:3002'],
    credentials: true,
  })
);

app.use('/api/v3', root_router);

app.get('/', async (req, res) => {
  return res.status(200).json({ mess: 'WELCOME' });
});

const handleCheckDB = async () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
};

handleCheckDB();

app.listen(PORT, () => {
  console.log(`Server is listen on http://localhost:${PORT}`);
});
