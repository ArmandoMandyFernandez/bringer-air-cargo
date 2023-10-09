const axios = require("axios");
const bearer = process.env.BEARER;


// Track the parcel function
async function trackParcel(req, res) {
    // Storing the tracking number
    const { tracking_number } = req.params;

    try {
        // Request to the API with Bearer
        const response = await axios.get(
            `https://bps.bringer.io/public/api/v2/get/parcel/tracking.json?tracking_number=${tracking_number}`,
            {
                headers: {
                    // Getting the Bearer token from the .env
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NzIzMjY1NTUsImV4cCI6MTcwMzg2MjU1NSwiYXVkIjoiaHR0cHM6Ly9icmluZ2VycGFyY2VsLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNTI1eXM2YWh4d3UyIiwianRpIjoiZDdlZGE3NDgtNzMxOS00YWIzLWI2MGEtMDEzMzI0NmVkNmY2In0.uJi6d6-E2zDWj24wryh2sVWKs4ceny4QllbrHrzK5L0`,
                },
            }
        );

        
        // Storing the parcel information
        const parcelInfo = response.data;
        
        // Returning it as json
        res.json(parcelInfo);

    // Catch error
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            error: "Error: ",
        });
    }
}

// Exporting function to index.js for use
module.exports = { trackParcel };
