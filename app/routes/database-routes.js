const mongoose = require("mongoose")
const db = require("./models")

module.exports = app => {
    // app.get

    app.get("/user", (req, res) => {
        db.User.find({})
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    })
    app.post("/workout", ({ body }, res) => {
        db.Times.create(body)
            .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    })
    app.get("/populatedWorkout", (req, res) => {
        db.User.find({})
            .populate("times")
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    })

}