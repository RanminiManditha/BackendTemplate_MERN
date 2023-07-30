const express = require("express");
const router = express.Router();

const {
  getData,
  getSingleData,
  createData,
  deleteData,
  updateData,
} = require("../controllers/dataController");

//get all data
router.get("/", getData);

//get a single data
router.get("/:id", getSingleData);

//create a new data
router.post("/", createData);

//delete a data
router.delete("/:id", deleteData);

//update a data
router.patch("/:id", updateData);

module.exports = router;
