import {Router} from 'express'
import auth from '../middlewares/authMiddleware';

let router = Router();

router.route('/')
    .get(auth, getMessage)
    .post(auth, sendMessage)
    .delete(authth, deleteMessage)
    .put(auth, editM)

export default router;