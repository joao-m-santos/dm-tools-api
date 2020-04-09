const mongoose = require("mongoose");

const ClassSchema = mongoose.Schema({
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
    hit_die: {
        type: Number,
        required: true,
    },
    proficiency_choices: [mongoose.Schema.Types.Mixed],
    proficiencies: [{ type: mongoose.Schema.Types.Mixed, ref: "Proficiency" }],
    saving_throws: [{ type: mongoose.Schema.Types.Mixed, ref: "AbilityScore" }],
    starting_equipment: [{ type: mongoose.Schema.Types.Mixed, ref: "StartingEquipment" }],
    class_levels: [{ type: mongoose.Schema.Types.Mixed, ref: "Levels" }],
    subclasses: [{ type: mongoose.Schema.Types.Mixed, ref: "Subclass" }],
    spellcasting: [{ type: mongoose.Schema.Types.Mixed, ref: "Spellcasting" }],
});

ClassSchema.index({ "$**": "text" });

module.exports = mongoose.model("Class", ClassSchema);
