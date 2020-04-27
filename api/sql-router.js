const express = require("express")
const db = require("../data/dbConfig")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        const customers = await db.select("*").from("accounts")
        res.json(customers)
    } catch (err) {
        next(err)
    }
})

module.exports = router