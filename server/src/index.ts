import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet"
import cors from "cors"
import authRouter from "./routes/user.route";

dotenv.config({
    path:"./.env"
})

const app=express()
const morganFormat=""

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use(morgan(morganFormat))
app.use(helmet())

app.use("api/v1/users",authRouter)

app.use("*",(err,req,res,next)=>{
    console.log(err.stack)
})

const port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server running on port:${port}`)
})
