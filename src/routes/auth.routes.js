import {Router} from 'express'
import {
    get_index,
    get_register,
    post_register,
    get_login,
    post_login
} from '../controllers/auth.controller.js'

const router = Router()

router.get('/', get_index);
router.get('/register', get_register);
router.post('/register', post_register);
router.get('/login', get_login);
router.post('/login', post_login);

export default router