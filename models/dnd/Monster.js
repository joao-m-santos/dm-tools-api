const mongoose = require("mongoose");

const MonsterSchema = mongoose.Schema({
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
    size: String,
    type: String,
    subtype: String,
    alignment: String,
    armor_class: Number,
    hit_points: Number,
    hit_dice: String,
    speed: mongoose.Schema.Types.Mixed,
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
    proficienies: [{ type: mongoose.Schema.Types.Mixed, ref: "Proficiency" }],
    damage_vulnerabilities: [{ type: mongoose.Schema.Types.Mixed, ref: "DamageType" }],
    damage_resistances: [{ type: mongoose.Schema.Types.Mixed, ref: "DamageType" }],
    damage_immunities: [{ type: mongoose.Schema.Types.Mixed, ref: "DamageType" }],
    condition_immunities: [{ type: mongoose.Schema.Types.Mixed, ref: "Condition" }],
    senses: mongoose.Schema.Types.Mixed,
    languages: String,
    challenge_rating: Number,
    special_abilities: [
        {
            name: String,
            desc: String,
            usage: {
                type: String,
                times: Number,
            },
        },
    ],
    actions: [
        {
            name: String,
            desc: String,
            attack_bonus: Number,
            damage: {
                damage_type: { type: mongoose.Schema.Types.Mixed, ref: "DamageType" },
                damage_dice: String,
                damage_bonus: Number,
            },
            dc: {
                dc_type: { type: mongoose.Schema.Types.Mixed, ref: "AbilityScore" },
                dc_value: Number,
                success_type: String,
            },
            usage: {
                type: String,
                dice: String,
                min_value: Number,
            },
        },
    ],
    legendary_actions: [
        {
            name: String,
            desc: String,
            attack_bonus: Number,
            damage: {
                damage_type: { type: mongoose.Schema.Types.Mixed, ref: "DamageType" },
                damage_dice: String,
                damage_bonus: Number,
            },
            dc: {
                dc_type: { type: mongoose.Schema.Types.Mixed, ref: "AbilityScore" },
                dc_value: Number,
                success_type: String,
            },
            usage: {
                type: String,
                dice: String,
                min_value: Number,
            },
        },
    ],
});

MonsterSchema.index({ "$**": "text" });

module.exports = mongoose.model("Monster", MonsterSchema);
