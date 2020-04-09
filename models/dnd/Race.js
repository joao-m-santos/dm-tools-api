const mongoose = require("mongoose");

const RaceSchema = mongoose.Schema({
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
    speed: Number,
    ability_bonuses: [
        {
            name: String,
            bonus: Number,
        },
    ],
    ability_bonus_options: {
        choose: Number,
        type: String,
        from: [
            {
                name: String,
                bonus: Number,
            },
        ],
    },
    alignment: String,
    age: String,
    size: String,
    size_description: String,
    starting_proficiencies: [{ type: mongoose.Schema.Types.Mixed, ref: "Proficiency" }],
    starting_proficiency_options: {
        choose: 1,
        type: String,
        from: [{ type: mongoose.Schema.Types.Mixed, ref: "Proficiency" }],
    },
    languages: [{ type: mongoose.Schema.Types.Mixed, ref: "Language" }],
    language_options: {
        choose: 1,
        type: String,
        from: [{ type: mongoose.Schema.Types.Mixed, ref: "Language" }],
    },
    language_desc: String,
    traits: [{ type: mongoose.Schema.Types.Mixed, ref: "Trait" }],
    trait_options: {
        choose: Number,
        type: String,
        from: [{ type: mongoose.Schema.Types.Mixed, ref: "Trait" }],
    },
    subraces: [{ type: mongoose.Schema.Types.Mixed, ref: "Subclass" }],
});

RaceSchema.index({ "$**": "text" });

module.exports = mongoose.model("Race", RaceSchema);
