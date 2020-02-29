const mongoose = require("mongoose");
require("dotenv/config");

module.exports = callback => {
    console.log("Initializing database connection...");

    mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    var db = mongoose.connection;

    db.on("connected", () => {
        console.log("Mongoose default connection is open to ", process.env.DB_CONNECTION);
        callback && callback(db);
    });

    db.on("error", err => {
        console.log("Mongoose default connection has occured " + err + " error");
    });

    db.on("disconnected", () => {
        console.log("Mongoose default connection is disconnected");
    });

    process.on("SIGINT", () => {
        db.close(() => {
            console.log("Mongoose default connection is disconnected due to application termination");
            process.exit(0);
        });
    });
};
