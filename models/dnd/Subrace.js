const mongoose = require("mongoose");

const SubraceSchema = mongoose.Schema({
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
    race: { type: mongoose.Schema.Types.Mixed, ref: "Race" },
    desc: String,
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
    racial_traits: [{ type: mongoose.Schema.Types.Mixed, ref: "Trait" }],
    racial_traits_options: {
        choose: 1,
        type: String,
        from: [{ type: mongoose.Schema.Types.Mixed, ref: "Trait" }],
    },
});

SubraceSchema.index({ "$**": "text" });

module.exports = mongoose.model("Subrace", SubraceSchema);
