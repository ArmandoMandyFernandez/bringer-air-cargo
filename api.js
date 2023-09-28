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
                    Authorization: `Bearer ${bearer}`,
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
