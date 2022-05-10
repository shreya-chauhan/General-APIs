import express from 'express';
import controller from '../controllers/favs';
const router = express.Router();

router.get('/favs', controller.getAllFavs);
router.post('/favs', controller.addFav);
router.delete('/favs/:id', controller.deleteFav);

export default router;