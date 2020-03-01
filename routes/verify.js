const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).send("Access Denied");
    const jwtToken = token.split("Bearer ")[1];
    try {
        const decoded = jwt.verify(jwtToken, process.env.TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(400).send("Invalid Token");
    }
};

module.exports = auth;
