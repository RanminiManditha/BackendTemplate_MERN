const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    atr1: {
      type: String,
      required: true,
    },
    atr2: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// In Mongoose, the timestamps option is a schema option that, when set to true, automatically adds two fields to the schema: createdAt and updatedAt. These fields are automatically managed by Mongoose and represent the creation and last update timestamps of a document

module.exports = mongoose.model("data", schema);
