const express = require("express");
const userModel = require("./models");

const app = express();

app.post("/register".replace('localhost:3000', 'localhost:3001'), async (request, response) => {
  
  const user = new userModel(request.body);

  console.log("inside POST");

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;