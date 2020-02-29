const mongoose = require("mongoose");

const CampaignSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: "chapter" }],
        encounters: [{ type: mongoose.Schema.Types.ObjectId, ref: "encounter" }],
        pcs: [{ type: mongoose.Schema.Types.ObjectId, ref: "pc" }],
        createdAt: Date,
        modifiedAt: Date
    },
    { timestamps: true }
);

module.exports = mongoose.model("Campaign", CampaignSchema);
