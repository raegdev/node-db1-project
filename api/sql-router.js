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
    try{
        const payload = {
            name: req.body.name,
            budget: req.body.budget
        }
        const [id] = await db("accounts").insert(payload)
        const account = await db("accounts").where("id", id).first()
        res.json(account)
    } catch (err) {
        next (err)
    }
})

router.put("/", async (req, res, next) => {

})

router.delete("/:id", (req, res, next) => {

})

module.exports = router