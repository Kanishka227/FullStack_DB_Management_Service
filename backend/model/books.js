const mongoose = require("mongoose")

const booksSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  rentPerDay: {
    type: Number,
    required: true
  }
},{timestamps: true})

const Books = mongoose.model("Books",booksSchema)
  
module.exports = Books