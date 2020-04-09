const mongoose = require("mongoose");

const ProficiencySchema = mongoose.Schema({
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
    type: String,
    classes: [{ type: mongoose.Schema.Types.Mixed, ref: "Class" }],
    races: [{ type: mongoose.Schema.Types.Mixed, ref: "Race" }],
});

ProficiencySchema.index({ "$**": "text" });

module.exports = mongoose.model("Proficiency", ProficiencySchema);
