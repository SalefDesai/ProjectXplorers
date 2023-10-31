import express from 'express';
import { getAllPorjects, logout, signIn, signup } from '../controllers/auth/spocAuth.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.post("/signup",signup);

router.post("/signin",signIn);

router.get("/logout",logout);

export default router;




// router.get("/getallprojects",isAuthenticated, getAllPorjects);

