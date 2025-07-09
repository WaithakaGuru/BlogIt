import express from 'express';
import {configDotenv} from 'dotenv';
import cookieParser from 'cookie-parser';
import Cors from 'cors';
import router from './routes/Api.router.ts';


configDotenv({path: "./.env"});
const PORT = process.env.PORT_NUMBER
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(Cors({ origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], 
  credentials: true
}))

app.use("/api", router);

app.listen(PORT, ()=>{
    console.log(`Server is up and running on Port: ${PORT}`);
})

process.on('uncaughtException', (err, origin) => {
    console.error('Caught exception:', err, 'Origin:', origin);
    // You might want to log the error to a file and then exit gracefully
    // process.exit(1); // Consider exiting after logging
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Log the error, but generally, unhandled rejections should be fixed.
});
