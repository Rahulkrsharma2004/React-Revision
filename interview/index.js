require('dotenv').config();
const cors = require('cors')
const express = require("express");
const connection = require("./db");
const router = require('./routes/userRoute');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/auth', router);
app.use("/", (req, res) => {
  res.send("Welcome to the Home Page Backend Testing");
});

app.listen(port, async () => {
  try {
    await connection;
    console.log(`Server is running on port ${port} and Connected To the DB`);
  } catch (error) {
    console.log(error);
  }
});
