const mongoose = require("mongoose");

const SkillSchema = mongoose.Schema({
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
    ability_score: [{ type: mongoose.Schema.Types.Mixed, ref: "AbilityScore" }],
});

SkillSchema.index({ "$**": "text" });

module.exports = mongoose.model("Skill", SkillSchema);
