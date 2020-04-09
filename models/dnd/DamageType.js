const mongoose = require("mongoose");

const DamageTypeSchema = mongoose.Schema({
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
    desc: {
        type: [String],
        required: true,
    },
});

DamageTypeSchema.index({ "$**": "text" });

module.exports = mongoose.model("DamageType", DamageTypeSchema, "damage_types");
