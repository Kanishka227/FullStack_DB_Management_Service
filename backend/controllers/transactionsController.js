const Transactions = require("../model/transactions")

const getList = async (req, res) => {
  try {
    const allTransactions = await Transactions.find({});
    res.status(200).json(allTransactions);
  } catch (error) {
    console.log("error fetching transactions list", error);
    res.status(505).json({ msg: "Internal Server Error" });
  }
};

const handleIssue = async(req,res) => {
  const{bookName,userId,date} = req.body
   if (!bookName || !userId || !date) {
     return res
       .status(400)
       .json({ msg: "Book name, userId, and issue date are required." });
   }
  const formattedDate = new Date(date);
  if (isNaN(formattedDate.getTime())) {
    // Check for invalid date
    return res.status(400).json({ msg: "Invalid date format." });
  }
  const newTransaction = new Transactions({
    bookName: bookName,
    userId: userId,
    issueDate: formattedDate,
    status: 'issued'
  })
  try{
    await newTransaction.save()
    res.status(200).json({msg: "Book issued successfully"})
  }
  catch(error){
    res.status(500).json({msg: 'failed to issue book',error: error.message})
  }
}
module.exports = {handleIssue , getList}