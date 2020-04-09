const mongoose = require("mongoose");

const WeaponPropertySchema = mongoose.Schema({
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

WeaponPropertySchema.index({ "$**": "text" });

module.exports = mongoose.model("WeaponProperty", WeaponPropertySchema, "weapon_properties");
