const mongoose = require("mongoose");

const LanguageSchema = mongoose.Schema({
    index: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
    typical_speakers: [{ type: mongoose.Schema.Types.Mixed, ref: "Race" }],
    script: String,
});

LanguageSchema.index({ "$**": "text" });

module.exports = mongoose.model("Language", LanguageSchema);
