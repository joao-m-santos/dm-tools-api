const mongoose = require("mongoose");

const LevelSchema = mongoose.Schema({
    level: {
        type: Number,
        required: true,
    },
    ability_score_bonuses: Number,
    prof_bonus: Number,
    feature_choices: [{ type: mongoose.Schema.Types.Mixed, ref: "Feature" }],
    features: [{ type: mongoose.Schema.Types.Mixed, ref: "Feature" }],
    spellcasting: [{ type: mongoose.Schema.Types.Mixed }],
    class_specific: [{ type: mongoose.Schema.Types.Mixed }],
    index: {
        type: Number,
        required: true,
    },
    class: { type: mongoose.Schema.Types.Mixed, ref: "Class" },
    subclass: { type: mongoose.Schema.Types.Mixed, ref: "Subclass" },
});

LevelSchema.index({ "$**": "text" });

module.exports = mongoose.model("Level", LevelSchema);
