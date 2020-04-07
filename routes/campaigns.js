const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const verify = require("./verify");

const Campaign = require("../models/Campaign");

const { campaignValidation } = require("../validation");

// GET
router.get("/", verify, (req, res) => {
    Campaign.find({ author: req.user }, (err, campaigns) => {
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
    const { error } = campaignValidation(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    Campaign.findOne({ name: req.body.name }).then((result) => {
        if (result) return res.status(400).send("A Campaign with this name already exists.");
        else {
            const newCampaign = new Campaign({
                author: req.user,
                name: req.body.name,
                active: false,
            });

            newCampaign
                .save()
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json(err);
                });
        }
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
                status: req.body.status,
            },
        },
        (err, result) => {
            if (!err) res.json(result);
            else res.json(err);
        }
    );
});

module.exports = router;
