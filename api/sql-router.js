const express = require("express")
const db = require("../data/dbConfig")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        const accounts = await db.select("*").from("accounts")
        res.json(accounts)
    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try{
        const accounts = await db("accounts").where("id", req.params.id).first()
        res.json(accounts)
    } catch (err) {
        next (err)
    }
})

router.post("/", async (req, res, next) => {

})

router.put("/", async (req, res, next) => {

})

router.delete("/:id", (req, res, next) => {

})

module.exports = router