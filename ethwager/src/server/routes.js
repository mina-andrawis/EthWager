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

app.get("/wagers/:wagerId", async (request, response) => {
  const wagerId = request.params.wagerId;
  const allwagers = await wagerModel.find({_id: wagerId});
  
  try {
  response.send(allwagers);
  } catch (error) {
  response.status(500).send(error);
  }
});

// *************** //
// progress routes //
// *************** //
app.patch("/update-progress", async (request, response) => {
  try {
  const id = request.body.pid;
  const newFloor = request.body.curr_floor;
  const currentDate = request.body.curr_date;
  
  const updatedProgress = await progressModel.findOneAndUpdate(
    {_id: id}, 
    {$push: {floor_data: newFloor, date_data: currentDate}},
    {new: true}
  );
  
  if (!updatedProgress) {
    return response.status(404).send("Progress not found");
  }
  
  response.send(updatedProgress);
  } catch (error) {
  response.status(500).send(error);
  }
  });



module.exports = app;