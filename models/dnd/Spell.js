const mongoose = require("mongoose");

const SpellSchema = mongoose.Schema({
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
    desc: [String],
    higher_level: [String],
    range: String,
    components: [String],
    material: String,
    ritual: Boolean,
    duration: String,
    concentration: Boolean,
    casting_time: String,
    level: Number,
    school: { type: mongoose.Schema.Types.Mixed, ref: "MagicSchool" },
    classes: [{ type: mongoose.Schema.Types.Mixed, ref: "Class" }],
    subclasses: [{ type: mongoose.Schema.Types.Mixed, ref: "Subclass" }],
});

SpellSchema.index({ "$**": "text" });

module.exports = mongoose.model("Spell", SpellSchema);
