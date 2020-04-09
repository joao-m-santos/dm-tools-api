const mongoose = require("mongoose");

const ConditionSchema = mongoose.Schema({
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

ConditionSchema.index({ "$**": "text" });

module.exports = mongoose.model("Condition", ConditionSchema);
