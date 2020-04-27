const express = require("express");

const db = require("../data/dbConfig.js");
const sqlRouter = require("./sql-router")
const server = express();

server.use(express.json());
server.use("/accounts", sqlRouter)

module.exports = server;
