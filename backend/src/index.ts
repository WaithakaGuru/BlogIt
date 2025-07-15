import express, { response } from "express";
import { configDotenv } from "dotenv";
import Cors from "cors";
import router from "./routes/Api.router.ts";

configDotenv({ path: "./.env" });
const PORT = process.env.PORT_NUMBER;
const app = express();

app.get("/", () => response.send("Welcome to BlgIt"));
app.use(express.json());
app.use(
  Cors({
    origin: ["http://localhost:5173", "https://blog-it-blush-five.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is up and running on Port: ${PORT}`);
});
