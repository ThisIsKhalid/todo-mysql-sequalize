import express from 'express';
import { userRouter } from './User.route.js';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRouter
    },
]

moduleRoutes.forEach(route => {
    router.use(route.path, route.route);
})

export default router;