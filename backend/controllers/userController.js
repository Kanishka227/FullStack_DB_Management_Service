const Users = require('../model/users')

const getAllUsers = async(req,res) => {
  try{
    const users = await Users.find({})
    res.status(200).json(users)
  }
  catch(error){
    console.log('error fetching users',error);
    res.status(505).json({msg: 'Internal Server Error'})
  }
}

module.exports = {getAllUsers}