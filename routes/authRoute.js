import express from 'express';
const router=express.Router();
import {registerCotroller} from '../controllers/authController.js'

//register method post
router.post('/register', registerCotroller);

export default router;