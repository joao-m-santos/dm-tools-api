const mongoose = require("mongoose");

const CampaignSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chapter" }],
        encounters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Encounter" }],
        pcs: [{ type: mongoose.Schema.Types.ObjectId, ref: "PC" }],
        status: { type: String, default: "not-started" }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Campaign", CampaignSchema);
