const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  dues: {
    type: Number
  }
},{timestamps: true})

const Users = mongoose.model("Users",usersSchema)

module.exports = Users