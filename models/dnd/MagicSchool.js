const mongoose = require("mongoose");

const MagicSchoolSchema = mongoose.Schema({
    index: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    desc: {
        type: [String],
        required: true,
    },
});

MagicSchoolSchema.index({ "$**": "text" });

module.exports = mongoose.model("MagicSchool", MagicSchoolSchema, "magic_schools");
