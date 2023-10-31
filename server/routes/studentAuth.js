import express from 'express';
import { getAllPorjects, logout, signIn, signup } from '../controllers/auth/studentAuth.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.post("/signup",signup);

router.post("/signin",signIn);

router.get("/logout",logout);

router.get("/getallprojects",isAuthenticated, getAllPorjects);

export default router;