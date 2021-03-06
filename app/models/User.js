const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    times: [
        {
            type: Schema.Types.ObjectId,
            ref: "Times"
        }
    ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
