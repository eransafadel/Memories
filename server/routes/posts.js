import express from 'express';
import {getPosts,createPost,updatePost} from '../controllers/posts.js';


const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost);// for update existing document

export default router;
