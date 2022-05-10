import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

router.get('/posts', controller.getPosts);
router.post('/posts', controller.addPost);
router.delete('/posts/:id', controller.deletePost);

export default router;