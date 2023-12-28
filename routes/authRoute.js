import express from 'express';
const router=express.Router();
import {registerController, loginController , testController, forgotPasswordController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'; 

//register method post
router.post('/register', registerController);

//login post method
router.post('/login', loginController);

//test route
router.get('/test', requireSignIn, isAdmin ,testController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
  
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;