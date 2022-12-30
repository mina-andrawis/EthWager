const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const username = "<mongodb username>";
const password = "<password>";
const cluster = "<cluster name>";
const dbname = "myFirstDatabase";

const app = express();
app.use(express.json());

mongoose.set('strictQuery', false);

mongoose.connect(
  `mongodb+srv://mandrawis:Y4IZJxCu7Nwjj077@cluster0.vxac5xx.mongodb.net/?retryWrites=true&w=majority`, 
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

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});