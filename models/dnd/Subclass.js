const mongoose = require("mongoose");

const SubclassSchema = mongoose.Schema({
    index: {
        type: String,
        required: true,
    },
    class: { type: mongoose.Schema.Types.Mixed, ref: "Class" },
    name: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    subclass_flavor: String,
    desc: [String],
    features: [{ type: mongoose.Schema.Types.Mixed, ref: "Feature" }],
    spells: [
        {
            prerequisites: { type: mongoose.Schema.Types.Mixed, ref: "Level" },
            spell: { type: mongoose.Schema.Types.Mixed, ref: "Spell" },
        },
    ],
});

SubclassSchema.index({ "$**": "text" });

module.exports = mongoose.model("Subclass", SubclassSchema);
