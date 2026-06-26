import express from "express"
import { signUp, signIn, signOut, sendOtp, verifyOtp, resetPassword } from "../controllers/auth.controller.js";
// Make sure this line exists and is spelled exactly right!
const authRouter=express.Router()

authRouter.post("/signup",signUp);
authRouter.post("/signout",signOut);
authRouter.post("/signin",signIn);
authRouter.post("/send-otp",sendOtp);
authRouter.post("/verify-otp",verifyOtp);
authRouter.post("/reset-password",resetPassword);
export default authRouter ;