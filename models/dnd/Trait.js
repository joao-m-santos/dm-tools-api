const mongoose = require("mongoose");

const TraitSchema = mongoose.Schema({
    index: {
        type: String,
        required: true,
    },
    races: [{ type: mongoose.Schema.Types.Mixed, ref: "Race" }],
    subraces: [{ type: mongoose.Schema.Types.Mixed, ref: "Subrace" }],
    name: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    desc: {
        type: [String],
        required: true,
    },
});

TraitSchema.index({ "$**": "text" });

module.exports = mongoose.model("Trait", TraitSchema);
