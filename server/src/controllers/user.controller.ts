import  { NextFunction, Request, Response } from "express";
import { signInSchema, signupSchema } from "../schema/user.Schema";
import z from "zod";
import bcrypt from "bcrypt"
import {PrismaClient} from "@prisma/client"


const prisma=new PrismaClient()

const registerUser=async (req:Request,res:Response,next:NextFunction) => {
    try {
     const result=signupSchema.safeParse(req.body) 
     if(result.error){
       return res.status(400).json({success:false,message:z.treeifyError(result.error)})
     } 
     const {username,email,password}=req.body; 
     const existingUsers=await prisma.user.findUnique({
        where:{
            email
        }
     })
     if(existingUsers){
        res.status(400).json({success:false,message:"User is already exist"})
     }
     const hashPassword=await bcrypt.hash(password,10)
     const user=await prisma.user.create({
      data:{
        username,
        email,
        password:hashPassword
      }
     })
     res.status(201).json({message:"User created successfully",data:user})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const loginUser=async (req:Request,res:Response,next:NextFunction) => {
    try {
     const result=signInSchema.safeParse(req.body)   
     if(result.error){
        res.status(400).json({succes:false,mesage:z.treeifyError(result.error)})
     }
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const logoutUser=async (req:Request,res:Response) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}


export {registerUser,logoutUser,loginUser}