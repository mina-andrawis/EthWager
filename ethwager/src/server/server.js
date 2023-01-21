const path = require('path');
require("dotenv").config({ path: path.resolve(__dirname, '../../', '.env') });
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);

mongoose.connect(
  process.env.REACT_APP_DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});