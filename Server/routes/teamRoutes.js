import express from 'express';
import {
  getTeams,
  createTeam,
  getTeamById,
  updateTeamById,
  deleteTeamById,
} from '../controller/teamController.js';

const router = express.Router();

router.get('/', getTeams);
router.post('/', createTeam);
router.get('/:teamId', getTeamById);
router.put('/:teamId', updateTeamById);
router.delete('/:teamId', deleteTeamById);

export default router;
