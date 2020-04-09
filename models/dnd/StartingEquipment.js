const mongoose = require("mongoose");

const StartingEquipmentSchema = mongoose.Schema({
    index: {
        type: Number,
        required: true,
    },
    class: { type: mongoose.Schema.Types.Mixed, ref: "Class" },
    starting_equipment: [
        {
            item: { type: mongoose.Schema.Types.Mixed, ref: "Equipment" },
            quantity: Number,
        },
    ],
    choices_to_make: Number,
    choice_1: [
        {
            choose: Number,
            type: String,
            from: [
                {
                    item: { type: mongoose.Schema.Types.Mixed, ref: "Equipment" },
                    quantity: Number,
                },
            ],
        },
    ],
    choice_2: [
        {
            choose: Number,
            type: String,
            from: [
                {
                    item: { type: mongoose.Schema.Types.Mixed, ref: "Equipment" },
                    quantity: Number,
                },
            ],
        },
    ],
    choice_3: [
        {
            choose: Number,
            type: String,
            from: [
                {
                    item: { type: mongoose.Schema.Types.Mixed, ref: "Equipment" },
                    quantity: Number,
                },
            ],
        },
    ],
    choice_4: [
        {
            choose: Number,
            type: String,
            from: [
                {
                    item: { type: mongoose.Schema.Types.Mixed, ref: "Equipment" },
                    quantity: Number,
                },
            ],
        },
    ],
    choice_5: [
        {
            choose: Number,
            type: String,
            from: [
                {
                    item: { type: mongoose.Schema.Types.Mixed, ref: "Equipment" },
                    quantity: Number,
                },
            ],
        },
    ],
});

StartingEquipmentSchema.index({ "$**": "text" });

module.exports = mongoose.model("StartingEquipment", StartingEquipmentSchema, "starting_equipment");
