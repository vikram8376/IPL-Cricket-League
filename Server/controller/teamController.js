import Team from '../models/Team.js';



// It tries to fetch all teams from the database using await Team.find().
export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// It extracts the teamId and name from the request body.
export const createTeam = (req, res) => {
  const { teamId } = req.body;
  const { name } = req.body;

  // Create a new team with the manually assigned ID
  const team = new Team({
    teamId,
    name,
  });

  // Save the team to the database
  team.save()
    .then((team) => {
      res.status(201).json({ message: 'Team created successfully', team });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};



// It retrieves the teamId from the request parameters.
// It tries to find a team in the database using await Team.findOne({ teamId })
export const getTeamById = async (req, res) => {
  const { teamId } = req.params;

  try {
    const team = await Team.findOne({ teamId });
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// It retrieves the teamId from the request parameters and the name from the request body.
// It tries to find and update a team in the database using await Team.findOneAndUpdate({ teamId }, { name }, { new: true }).
export const updateTeamById = async (req, res) => {
  const { teamId } = req.params;
  const { name } = req.body;

  try {
    const team = await Team.findOneAndUpdate({ teamId }, { name }, { new: true });
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// It retrieves the teamId from the request parameters.
// It tries to find and delete a team in the database using await Team.findOneAndDelete({ teamId }).
export const deleteTeamById = async (req, res) => {
  const { teamId } = req.params;

  try {
    const team = await Team.findOneAndDelete({ teamId });
    if (team) {
      res.status(200).json({ message: 'Team deleted successfully' });
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
