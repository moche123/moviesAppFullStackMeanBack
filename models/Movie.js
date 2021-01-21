const { Schema, model } = require("mongoose");

const MovieSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    urlImage: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Movie", MovieSchema);