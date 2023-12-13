import express from 'express';  //  Imports the Express.js framework.
import mongoose from 'mongoose';  //  Imports the Mongoose library for MongoDB database interactions.
import bodyParser from 'body-parser';  // Imports the Body Parser middleware for parsing request bodies.
import cors from 'cors';            //  Imports the CORS middleware for enabling Cross-Origin Resource Sharing.
import teamRoutes from './routes/teamRoutes.js';   //  Imports the team-related routes from the 
import playerRoutes from './routes/playerRoutes.js';  // Imports the player-related routes from the 



// Connects to the MongoDB database with the specified URL 
// useNewUrlParser option is set to true to ensure compatibility with the MongoDB driver's new URL parser.
// useUnifiedTopology option is set to true to enable the new unified topology engine for MongoDB connections
mongoose
  .connect('mongodb://127.0.0.1:27017/IPL_Team_Management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected successfully to MongoDB'))
  .catch((err) => {
    console.error('Error occurred while connecting to MongoDB', err);
  });

//  Creates an instance of the Express application.
const app = express();
//  Defines the port number on which the server will listen.
const port = 5000;


// Configures the server to use the Body Parser middleware for parsing JSON request bodies.
app.use(bodyParser.json());
//  Configures the server to use the CORS middleware for handling Cross-Origin Resource Sharing.
app.use(cors());

// Routes
app.use('/', teamRoutes);
app.use('/', playerRoutes); // Mount the playerRoutes here

app.get('/', (req, res) => res.send('Hello world'));
app.all('*', (req, res) => res.send('This route does not exist here')); // Defines a catch-all route for all other paths that returns a response indicating that the route does not exist.


// Starts the server and listens on the specified port (5000 in this case).
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

  