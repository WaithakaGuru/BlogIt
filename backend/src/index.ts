import express from 'express';
import {configDotenv} from 'dotenv';
import Cors from 'cors';
import router from './routes/Api.router.ts';
import hashPassword from './utils/hashPassword.ts';


configDotenv({path: "./.env"});
const PORT = process.env.PORT_NUMBER
const app = express();

app.use(express.json());
app.use(Cors({ origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true
}))

app.use("/api", router);

app.listen(PORT, ()=>{
    console.log(`Server is up and running on Port: ${PORT}`);
})

