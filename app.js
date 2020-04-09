const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const database = require("./connection");
database(db => {});

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const usersRoute = require("./routes/users");
const campaignsRoute = require("./routes/campaigns");
const dndRoute = require("./routes/dnd");

app.use("/users", usersRoute);
app.use("/campaigns", campaignsRoute);
app.use("/dnd", dndRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
