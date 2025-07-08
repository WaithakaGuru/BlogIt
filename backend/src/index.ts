import express from 'express';
import { Request, Response } from 'express';
import {configDotenv} from 'dotenv';
import Cors from 'cors';


configDotenv({path: "./.env"});
const PORT = process.env.PORT_NUMBER
const app = express();

console.log(process.env.DATABASE_URL);

app.use(express.json());
app.use(Cors({ origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true
}))

app.listen(PORT, ()=>{
    console.log(`Server is up and running on Port: ${PORT}`);
})

