const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 4,
            maxlength: 255
        },
        email: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 255
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 1024
        },
        campaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
