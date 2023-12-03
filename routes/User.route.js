import express from 'express';
import { userController } from '../controller/User.controller.js';

const router = express.Router();

router.post('/register', userController.createUser)

router.get('/', userController.getAllUsers)


export const userRouter = router;