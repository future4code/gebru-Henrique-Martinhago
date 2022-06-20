import express from "express";
import cors from "cors";
import { Request, Response } from "express";


const app = express()

app.use(express.json())

app.use(cors())




app.get('/', (resq: Request, res: Response)=>{
    res.status(200).send(" sucesso ")
    })
    