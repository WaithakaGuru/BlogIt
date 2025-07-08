import express from 'express';
import { Request, Response,NextFunction } from 'express';
import {configDotenv} from 'dotenv';
import Cors from 'cors';
import router from './routes/Api.router.ts';


configDotenv({path: "./.env"});
const PORT = process.env.PORT_NUMBER
const app = express();

app.use(express.json());
app.use(Cors({ origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  // allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true
}))

app.use("/api", router);
app.use((req:Request, res:Response, next:NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.listen(PORT, ()=>{
    console.log(`Server is up and running on Port: ${PORT}`);
})

