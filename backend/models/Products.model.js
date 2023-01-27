const mongoose = require("mongoose");
const { validateName } = require("../utils/validationUtil");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: validateName,
      message: (props) => `${props.value} is not a valid name!`,
    },
  },
  description: { type: String },
  actualPrice: { type: Number, required: true },
  isActive: { type: Boolean, default: false },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Products", ProductSchema);
