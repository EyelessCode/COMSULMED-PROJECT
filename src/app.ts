import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config"

const app=express()
const PORT=process.env.PORT||4000

app.use(express.json())
app.use(cors())

app.get("/test",(req:Request,res:Response)=>{
    res.send("HOLA MUNDO!")
})

app.listen(PORT,()=>console.log(`Escuchando http://localhost:${PORT}`))
