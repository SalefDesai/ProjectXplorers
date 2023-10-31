import express from 'express';
import {getCodes, getCollages, getUniversities} from '../controllers/auth/collageSelection.js';

const router = express.Router();

router.get("/universities/:district",getUniversities);

router.get("/collage/:university",getCollages);

router.get("/getcode/:collage",getCodes);



export default router;

