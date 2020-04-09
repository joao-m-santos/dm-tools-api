const mongoose = require("mongoose");

const EquipmentCategorySchema = mongoose.Schema({
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
    equipment: [{ type: mongoose.Schema.Types.Mixed, ref: "Equipment" }],
});

EquipmentCategorySchema.index({ "$**": "text" });

module.exports = mongoose.model("EquipmentCategory", EquipmentCategorySchema, "equipment_categories");
