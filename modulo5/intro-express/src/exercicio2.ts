import express from "express";
import cors from "cors";
import { Request, Response } from "express";


const app = express()

app.use(express.json())

app.use(cors())

type Users = {
    id:number,
    name:string,
    phone:number,
    email:string,
    website:string
 }

 const dadosUsers: Users = {
     id: 0,
     name: "",
     phone: 0,
     email: "",
     website: ""
 }


app.get('/', (resq: Request, res: Response)=>{
res.status(200).send(" sucesso ")
})
