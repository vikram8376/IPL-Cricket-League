//  This imports the Mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and provides an interface for interacting with MongoDB.
import mongoose from 'mongoose';


//  This creates a new Mongoose schema called playerSchema for the "Player" entity.
// Inside the schema definition, various fields are specified with their corresponding data types and validation rules.
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  teamId: {
    type: String,
    required: true,
  },
});
// const Player = mongoose.model('Player', playerSchema);: This creates a Mongoose model called Player using the defined schema.
// The second argument is the schema (playerSchema) that defines the structure of the documents stored in the collection.
const Player = mongoose.model('Player', playerSchema);

export default Player;
