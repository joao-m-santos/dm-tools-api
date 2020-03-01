const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const verify = require("./verify");

const Campaign = require("../models/Campaign");

// GET
router.get("/", verify, (req, res) => {
    Campaign.find({}, (err, campaigns) => {
        if (!err) res.json(campaigns);
        else res.json(err);
    });
});

router.get("/:id", verify, (req, res) => {
    Campaign.findById(req.params.id, (err, campaign) => {
        if (!err) res.json(campaign);
        else res.json(err);
    });
});

// POST
router.post("/", verify, (req, res) => {
    const newCampaign = new Campaign({
        name: req.body.name,
        active: false,
        chapters: req.body.chapters
    });

    newCampaign
        .save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

// DELETE
router.delete("/:id", verify, (req, res) => {
    Campaign.deleteOne({ _id: req.params.id }, (err, result) => {
        if (!err) res.json(result);
        else res.json(err);
    });
});

// PATCH
router.patch("/:id", verify, (req, res) => {
    Campaign.updateOne(
        { _id: req.params.id },
        {
            $set: {
                name: req.body.name,
                status: req.body.status
            }
        },
        (err, result) => {
            if (!err) res.json(result);
            else res.json(err);
        }
    );
});

module.exports = router;
