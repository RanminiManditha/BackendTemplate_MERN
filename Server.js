require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dataRoutes = require("./routes/data");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/data", dataRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
