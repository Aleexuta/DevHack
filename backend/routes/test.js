require('dotenv').config()
const express = require('express');
const router = express.Router();

//200 -- OK (all's good)
//201 -- Succes (succesfully created an object)

//500 -- sv side error (bad connection string)
//400 -- client side error (bad params, body)
//404 -- not found

//GET all
router.get('/', async (req, res) => {
    res.json("Hello!");
})

module.exports = router;