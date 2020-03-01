const mongoose = require("mongoose");

const ChapterSchema = mongoose.Schema(
    {
        _index: Number,
        name: {
            type: String,
            required: true
        },
        description: String,
        campaign: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
        encounters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Encounter" }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Chapter", ChapterSchema);
