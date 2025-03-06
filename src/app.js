const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");
const user = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Ritik",
    lastName: "Srivastava",
    emailId: "ritik@gmail.com",
    gender: "male",
    age: 23,
    password: "Ritik@22",
  });
  try {
    await user.save();

    res.send("data added successfully");
  } catch (error) {
    res.status(400).send("Error saving the user : " + error.message)
  }
});

connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(7777, () => {
      console.log("server is successfully running on port 7777");
    });
  })
  .catch((err) => {
    console.log("database connection failed !!" + err);
  });
