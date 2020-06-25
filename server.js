const express = require("express")
const logger = require("morgan")
const ejs = require("ejs")
const helmet = require("helmet")
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose")
const app = express()

app.use(helmet())

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static("public"))

app.engine("ejs", ejs({ defaultLayout: "main" }))
app.set("view engine", "ejs")

require("./app/routes/ejs-routes.js")(app)
require("./app/routes/database-routes.js")(app)

app.use(express.static("public"))



app.listen(PORT, () => {
    console.log("PORT " + PORT)
})