const mongoose = require("mongoose");

const SpellcastingSchema = mongoose.Schema({
    index: {
        type: Number,
        required: true,
    },
    class: { type: mongoose.Schema.Types.Mixed, ref: "Class" },
    level: Number,
    spellcasting_ability: { type: mongoose.Schema.Types.Mixed, ref: "AbilityScore" },
    info: [
        {
            name: String,
            desc: [String],
        },
    ],
});

SpellcastingSchema.index({ "$**": "text" });

module.exports = mongoose.model("Spellcasting", SpellcastingSchema);
