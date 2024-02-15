
import express from 'express';
import { signUp, logIn, verifyEmail, forgetPassword, resetPassword,uploadMultipleImages } from "./user.controller.js";
import { validation } from '../../middleware/validation.js';
import {  loginSchema, signUpSchema } from './user.vaildator.js';

const userRoutes = express.Router()

// uploadMultipleImages
userRoutes.post("/signUp",validation(signUpSchema) ,signUp);
userRoutes.post("/logIn",validation(loginSchema), logIn);
userRoutes.post("/forget", forgetPassword);
userRoutes.post("/reset/:token", resetPassword);
userRoutes.get("/verfiy/:token", verifyEmail);






//ولااختار صورة المالتر منزلش اا عفكرة 


export default userRoutes;
