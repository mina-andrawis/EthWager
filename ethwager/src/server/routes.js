const express = require("express");
const wagerModel = require("./models/wagerModel")
const userModel = require("./models/userModel")
const progressModel = require("./models/progressModel")

const app = express();

// *********** //
// auth routes //
// *********** //
app.post("/auth/register", async (request, response) => {
  
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

// ************ //
// wager routes //
// ************ //
app.post("/create-wager", async (request, response) => {
  const wager = new wagerModel(request.body);

  try {
    await wager.save();
    response.send(wager);
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

// *************** //
// progress routes //
// *************** //
app.post("/create-progress", async (request, response) => {
  const progress = new progressModel(request.body);

  try {
    await progress.save();
    response.send(progress);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/progress/:wagerId", async (request, response) => {
  const wagerId = request.params.wagerId;
  const wagerProgress = await progressModel.find({wager_id: wagerId});
  
  try {
    response.send(wagerProgress);
  } catch (error) {
    response.status(500).send(error);
  }
});



module.exports = app;