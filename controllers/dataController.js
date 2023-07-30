const Data = require("../models/dataSchema");
const mongoose = require("mongoose");

//get all data
const getData = async (req, res) => {
  const data = await Data.find({}).sort({ createdAt: -1 });
  res.status(200).json(data);
};

//get a single data
const getSingleData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such data" });
  }

  const data = await Data.findById(id);

  if (!data) {
    res.status(404).json({ error: "No such data" });
  }

  res.status(200).json(data);
};

//create a new data
const createData = async (req, res) => {
  const { atr1, atr2 } = req.body;
  try {
    const data = await Data.create({ atr1, atr2 });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a data
const deleteData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such data" });
  }

  const data = await Data.findOneAndDelete({ _id: id });

  if (!data) {
    res.status(404).json({ error: "No such data" });
  }

  res.status(200).json(data);
};

//update a data
const updateData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such data" });
  }

  const data = await Data.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!data) {
    res.status(404).json({ error: "No such data" });
  }

  res.status(200).json(data);
};

module.exports = {
  getData,
  createData,
  getSingleData,
  deleteData,
  updateData,
};
