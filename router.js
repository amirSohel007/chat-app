const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Its working now !")
})

module.exports = router