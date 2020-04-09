const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const verify = require("./verify");

const db = mongoose.connection;

const models = require("../models/dnd/index");

// GET
router.get("/search", verify, (req, res) => {
    const searchValue = req.query.value;
    if (searchValue) {
        let queryPromises = [];

        console.log("Searching: " + searchValue);
        models.forEach((model) => {
            queryPromises.push(model.find({ $text: { $search: searchValue } }));
        });

        Promise.all(queryPromises).then((results) => {
            let processedResults = {};
            results.forEach((result, i) => {
                processedResults[models[i].collection.collectionName] = result;
            });
            res.json(processedResults);
        });
    }
});

router.get("/test", verify, (req, res) => {
    const AbilityScore = collections[0];
    AbilityScore.findOne({ name: "WIS" })
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;

// Text indexing
// models.forEach((model) => {
//     model.collection.dropIndexes();
// });
