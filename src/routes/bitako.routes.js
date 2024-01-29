import {Router} from 'express'
//import {authRequired} from '../middlewares/auth.controller.js'
import {addTask} from '../controllers/tasks.controller.js';

const router = Router()

/*
router.get('/tasks', authRequired);
router.get('/tasks/:id', authRequired);
router.post('/tasks', authRequired, addTask);
router.delete('/tasks/:id', authRequired);
router.put('/tasks/:id', authRequired);
*/
router.post('/tasks', addTask);

export default router
