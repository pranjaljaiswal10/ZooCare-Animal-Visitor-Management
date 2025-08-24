import { Router } from "express";
import { loginUser,  logoutUser,  registerUser } from "../controllers/user.controller";



const authRouter=Router()

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.post("/logOut",logoutUser)

export default authRouter;