const mongoose = require("mongoose");

const ChapterSchema = mongoose.Schema({
    _index: Number,
    name: {
        type: String,
        required: true
    },
    description: String
});

module.exports = mongoose.model("Chapter", ChapterSchema);
