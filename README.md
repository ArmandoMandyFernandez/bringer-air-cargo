# bringer-air-cargo-server
REST Api with 2 endpoints
1) POST - Taking in an email and a password which will return a Json Web Token to the client.
2) GET - Receiving information of a parcel and history of tracking.

# Dependencies

This server project relies on the following dependencies:

- **axios** (^1.5.0): A promise-based HTTP client for making requests to external APIs or services.

- **cors** (^2.8.5): A middleware for handling Cross-Origin Resource Sharing (CORS) in your Express.js application.

- **dotenv** (^16.3.1): A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

- **express** (^4.18.2): A popular web framework for building Node.js applications, used for creating the server.

- **jsonwebtoken** (^9.0.2): A library for generating and verifying JSON Web Tokens (JWTs), often used for user authentication and authorization.

These dependencies are automatically installed when you run `npm install` as specified in the project's `package.json` file.


# Instructions

To run the server first run the command code `npm install` to ensure you have installed all the packages and after run `node server.js` to run the server. 

To access the server go to your browser and enter the URL `http://localhost:8888`

# Acknowledgments
Thank you to the team at Bringer Air Cargo

-Mandy