const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const app = express()
const cors = require("cors")

// Models
const Books = require("./model/books")
const Transactions = require("./model/transactions")
const Users = require("./model/users")

// Routes
const booksRoute = require("./routes/booksRoute")
const userRoute = require("./routes/userRoute")
const transactionsRoute = require("./routes/transactionsRoute")

dotenv.config() // Load environment variables

// Define post and database url from env variables
const PORT = process.env.PORT || 3000
const DB_URL = process.env.DB_URL

// Middleware for CORS
app.use(express.json());
app.use(cors())

// Middleware to use the bookRoute
app.use('/books',booksRoute)
app.use('/users',userRoute)
app.use('/transactions',transactionsRoute)


// Function to connect database
const databaseConnect = async() => {
  try{
    await mongoose.connect(`${DB_URL}`).then(() => console.log("database connected successfully")
    )
  }
  catch(error){
    console.log("error in connection " , error); 
  }
}

// Connect to the database
databaseConnect()

// Start the server
app.listen(PORT,() => console.log(`listening at port ${PORT}`)
)

