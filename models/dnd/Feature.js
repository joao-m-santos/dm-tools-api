const mongoose = require("mongoose");

const FeatureSchema = mongoose.Schema({
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
    class: { type: mongoose.Schema.Types.Mixed, ref: "Class" },
    subclass: { type: mongoose.Schema.Types.Mixed, ref: "Subclass" },
    level: Number,
    choice: mongoose.Schema.Types.Mixed,
});

FeatureSchema.index({ "$**": "text" });

module.exports = mongoose.model("Feature", FeatureSchema);
