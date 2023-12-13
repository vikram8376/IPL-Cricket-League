// This imports the Mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and provides an interface for interacting with MongoDB.
import mongoose from 'mongoose';


// : This creates a new Mongoose schema called teamSchema for the "Team" entity.
// This schema defines the structure and constraints of the "Team" entity
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teamId: {
    type: String,
    required: true,
    unique: true,
  },
});


// This creates a Mongoose model called Team using the defined schema.
// The second argument is the schema (teamSchema) that defines the structure of the documents stored in the collection.
const Team = mongoose.model('Team', teamSchema);

export default Team;


