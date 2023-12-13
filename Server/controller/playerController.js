import Player from '../models/Player.js';

// This function retrieves all players associated with a specific team ID.
// It uses the teamId parameter from the request parameters (req.params) to filter the players.
// It uses Player.find({ teamId }) to query the database and retrieve the matching players.
export const getPlayersByTeamId = async (req, res) => {
  const { teamId } = req.params;

  try {
    const players = await Player.find({ teamId });
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// It extracts the necessary player information (name, age, position, city) from the request body (req.body) and the team ID from the request parameters (req.params).
export const createPlayer = (req, res) => {
  const { name, age, position, city } = req.body;
  const { teamId } = req.params;

  // Create a new player with the manually assigned team ID
  // It creates a new instance of the Player model with the provided data
  const player = new Player({
    name,
    age,
    position,
    city,
    teamId,
  });

 
  // player to the database using player.save().
  player.save()
    .then((player) => {
      res.status(201).json({ message: 'Player created successfully', player });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};




// This function retrieves a specific player by their ID and team ID.
// It uses the playerId and teamId parameters from the request parameters to identify the player.
export const getPlayerById = async (req, res) => {
  const { teamId, playerId } = req.params;

  try {

    //  to query the database and find the matching player.
    const player = await Player.findOne({ _id: playerId, teamId });
    if (player) {
      res.status(200).json(player);
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// This function updates a specific player's information by their ID and team ID.
// It uses the playerId and teamId parameters from the request parameters to identify the player
// It extracts the updated player information (name, age, position, city) from the request body (req.body).
// Player.findOneAndUpdate() to find the player and update their information with the provided data.
export const updatePlayerById = async (req, res) => {
  const { teamId, playerId } = req.params;
  const { name, age, position, city } = req.body;

  try {
    const player = await Player.findOneAndUpdate(
      { _id: playerId, teamId },
      { name, age, position, city },
      { new: true }   // The { new: true } option ensures that the updated player is returned as the result
    );
    if (player) {
      res.status(200).json(player);
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// This function deletes a specific player by their ID and team ID.
// It uses the playerId and teamId parameters from the request parameters to identify the player.
// Player.findOneAndDelete() to find the player and remove them from the database.
export const deletePlayerById = async (req, res) => {
  const { teamId, playerId } = req.params;

  try {
    const player = await Player.findOneAndDelete({ _id: playerId, teamId });
    if (player) {
      res.status(200).json({ message: 'Player deleted successfully' });
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
