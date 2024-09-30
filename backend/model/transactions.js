const mongoose = require("mongoose")

const transactionsSchema = new mongoose.Schema({
  bookName:{
    type: String,
  },
  userId: {
    type: String,
  },
  issueDate: {
    type: Date
  },
  returnDate: {
    type: Date
  },
  rent: {
    type: Number
  },
  status: {
    type: String,
    default: null
  }
  
},{timestamps: true})

const Transactions = mongoose.model("Transactions",transactionsSchema)

module.exports = Transactions