import express from 'express';
const router=express.Router();
import {registerController, loginController} from '../controllers/authController.js'


//register method post
router.post('/register', registerController);

//login post method
router.post('/login', loginController);

export default router;