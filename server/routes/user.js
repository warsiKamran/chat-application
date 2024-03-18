import express from "express";
import { newUser } from "../controllers/user.js";
import singleUpload from "../middlewares/multer.js";


const router = express.Router();

router.route("/new").post(singleUpload, newUser);



export default router;

