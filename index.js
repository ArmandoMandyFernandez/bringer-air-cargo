require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8888;
app.use(express.json());
app.use(cors());

// Requiring modules
const auth = require("./auth");
const api = require("./api");

// Generating the JWT token endpoint pulling from auth.js
app.post("/generate_token", auth.generateToken);

// Tracking the parcel endpoint - pulling from api.js
app.get("/tracking_parcel/:tracking_number", api.trackParcel);

// I use port 8888
app.listen(PORT, () => {
    console.log(`Server running on port ${port}`);
});
