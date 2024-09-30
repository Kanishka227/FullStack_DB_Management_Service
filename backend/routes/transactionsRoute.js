const { handleIssue ,getList} = require('../controllers/transactionsController')

const router = require('express').Router()

router.post('/issue',handleIssue)

router.get('/',getList)

module.exports = router