const path = require("path")
const db = require("../models")
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = app => {
    app.get("/", (req, res) => {
        if (req.user) {
            res.render("login")
        }
        res.render("login", { title: "Login" })
    })
    app.get("/index", isAuthenticated, (req, res) => {
        if (req.user) {
            res.render("index")
        }
        res.render("index", { title: "Military Prep App" })
    })
    app.get("/hiscores", isAuthenticated, (req, res) => {
        if (req.user) {
            res.render("hiscores")
        }
        res.render("hiscores", { title: "HiScores" })
    })
}