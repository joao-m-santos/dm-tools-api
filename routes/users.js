const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const verify = require("./verify");

const User = require("../models/User");

const { signupValidation, loginValidation } = require("../validation");
const saltRounds = 10;

// GET
router.get("/", (req, res) => {
    User.find({}, (err, user) => {
        if (!err) res.json(user);
        else res.json(err);
    });
});

router.get("/:id", verify, (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (!err) res.json(user);
        else res.json(err);
    });
});

// POST
router.post("/signup", (req, res) => {
    // Validate request body
    const { error } = signupValidation(req.body);
    if (error) res.status(400).send(error.details[0].message);

    // Check if user already exists in database
    User.findOne({ email: req.body.email }).then(result => {
        if (result) return res.status(400).send("Email already exists.");
        else {
            // Encrypt password
            bcrypt.hash(req.body.password, saltRounds).then(hash => {
                // Create the new user
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                });
                newUser
                    .save()
                    .then(data => {
                        res.json(data);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            });
        }
    });
});

router.post("/login", (req, res) => {
    // Validate request body
    const { error } = loginValidation(req.body);
    if (error) res.status(400).send(error.details[0].message);

    // Check if user already exists in database
    const queryDetails = req.body.email ? { email: req.body.email } : { name: req.body.name };
    User.findOne(queryDetails).then(user => {
        if (!user) return res.status(400).send("User not found.");
        else {
            bcrypt.compare(req.body.password, user.password).then(result => {
                if (!result) return res.status(400).send("Invalid password.");
                const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
                res.header("Authorization", "Bearer " + token).send(token);
            });
        }
    });
});

module.exports = router;
