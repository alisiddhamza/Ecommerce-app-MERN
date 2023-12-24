import express from 'express';
const router=express.Router();
import {registerController, loginController , testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'; 

//register method post
router.post('/register', registerController);

//login post method
router.post('/login', loginController);

//test route
router.get('/test', requireSignIn, isAdmin ,testController);

export default router;