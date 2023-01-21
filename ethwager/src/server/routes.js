const express = require("express");
const wagerModel = require("./models")
const userModel = require("./models")

const app = express();

app.post("/register", async (request, response) => {
  
  const user = new userModel(request.body);

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

app.post("/create-wager", async (request, response) => {
  const wager = new wagerModel(request.body);

  try {
    await wager.save();
    response.send(wager);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/wagers", async (request, response) => {
  const wagers = await wagerModel.find({});

  try {
    response.send(wagers);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/wagers/:userId", async (request, response) => {
  const userId = request.params.userId;
  const allwagers = await wagerModel.find({user_id: userId});
  
  try {
  response.send(allwagers);
  } catch (error) {
  response.status(500).send(error);
  }
});

module.exports = app;