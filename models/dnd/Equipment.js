const mongoose = require("mongoose");

const EquipmentSchema = mongoose.Schema({
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
    equipment_category: [{ type: String, ref: "EquipmentCategory" }],
    gear_category: String,
    vehicle_category: String,
    weapon_category: String,
    weapon_range: String,
    category_range: String,
    cost: mongoose.Schema.Types.Mixed,
    damage: mongoose.Schema.Types.Mixed,
    range: mongoose.Schema.Types.Mixed,
    weight: Number,
    properties: mongoose.Schema.Types.Mixed,
    "2h_damage": mongoose.Schema.Types.Mixed,
});

EquipmentSchema.index({ "$**": "text" });

module.exports = mongoose.model("Equipment", EquipmentSchema);
