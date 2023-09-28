const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

// creating the function for the generation of the JWT Token
function generateToken(req, res) {

    // Storing the variables of login and password
    const { login, password } = req.body;

    // Combining the login and password to create the JWT Token
    const token = jwt.sign({ login, password }, secretKey);

    // creating a json with the token
    res.json({ token });
}

// exporting function to use in index.js
module.exports = { generateToken };
