import { NextFunction, Request, Response } from "express";
import { createAnimalSchema, updateAnimalSchema } from "../schema/animalSchema";
import z from "zod";


const createAnimal=async (req:Request,res:Response,next:NextFunction) => {
    try {
        const result=createAnimalSchema.safeParse(req.body)
        if(result.error){
            res.status(400).json({success:false,message:z.treeifyError(result.error)})
        }
        const {name,species,age,sex,diet,weight,height,habitat,imageUrl}=req.body
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const updateAnimal=async (req:Request,res:Response,next:NextFunction) => {
    try {
       const result=updateAnimalSchema.safeParse(req.params)
       if(result.error){
        res.status(400).json({succcess:false,message:z.treeifyError(result.error)})
       } 
       const {}=req.body;
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getAnimalList=async (req:Request,res:Response,next:NextFunction) => {
    try {
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getAnimalById=async (req:Request,res:Response,next:NextFunction) => {
    try {
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const deleteAnimal=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export {createAnimal,updateAnimal,getAnimalList,getAnimalById,deleteAnimal}