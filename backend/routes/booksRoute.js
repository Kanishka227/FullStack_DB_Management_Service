const {getAllBooks} = require("../controllers/booksController")
const router = require("express").Router()

router.get("/",getAllBooks)

module.exports = router