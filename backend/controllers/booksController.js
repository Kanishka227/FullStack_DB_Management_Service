const Books = require("../model/books")

const getAllBooks = async(req,res) => {
  try{
    const allBooks = await Books.find({})
    res.status(200).json(allBooks)
  }
  catch(error){
    console.log("error fetching books",error);
    res.status(505).json({msg: "Internal Server Error"})
  }
}

module.exports = {getAllBooks}