const mongoose = require("mongoose");

const AbilityScoreSchema = mongoose.Schema({
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
    full_name: {
        type: String,
        required: true,
    },
    desc: {
        type: [String],
        required: true,
        index: false,
    },
    skills: [{ type: mongoose.Schema.Types.Mixed, ref: "Skill" }],
});

AbilityScoreSchema.index({ "$**": "text" });

module.exports = mongoose.model("AbilityScore", AbilityScoreSchema, "ability_scores");
