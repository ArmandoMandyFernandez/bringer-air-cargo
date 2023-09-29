const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

// creating the function for the generation of the JWT Token
function generateToken(req, res) {
    try {
        // Validating input data
        const { login, password } = req.body;
        if (!login || !password) {
            return res.status(400).json({ error: "Missing login or password" });
        }

        // Create a JWT Token
        const token = jwt.sign({ login, password }, secretKey);

        // Response with the token
        res.status(200).json({ token });
    } catch (error) {

        // Handle error
        res.status(500).json({ error: "Internal server error" });
    }
}

// exporting function to use in server.js
module.exports = { generateToken };
