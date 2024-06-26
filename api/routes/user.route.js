import express from 'express';
import { deleteUsers, getUser, getUsers, updateUser, savePost } from '../controllers/user.controller.js';
import {verifyToken} from "../middleware/verifyToken.js"

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', verifyToken, getUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUsers);
router.post('/save', verifyToken, savePost);


export default router;