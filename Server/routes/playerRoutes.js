import express from 'express';
import {
  getPlayersByTeamId,
  createPlayer,
  getPlayerById,
  updatePlayerById,
  deletePlayerById,
} from '../controller/playerController.js';

const router = express.Router();

router.get('/teams/:teamId/players', getPlayersByTeamId);
router.post('/teams/:teamId/players', createPlayer);
router.get('/teams/:teamId/players/:playerId', getPlayerById);
router.put('/teams/:teamId/players/:playerId', updatePlayerById);
router.delete('/teams/:teamId/players/:playerId', deletePlayerById);

export default router;
