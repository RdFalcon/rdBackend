import { Router } from "express";
import { regitsterUser } from "../controllers/user.controller.js";
const router=Router();
router.route("/register").post(regitsterUser)



export default router;