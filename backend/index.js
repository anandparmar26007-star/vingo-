
import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import dns from "dns";
import shopRouter from "./routes/shop.routes.js";

//dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app= express();   /* access the express all object through the app */
const port=process.env.PORT  || 8000
app.use(cors({
   origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}))
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth",authRouter);
app.use("/api/shop", shopRouter);


/*
app.listen(port,()=>{
    connectDB()
    console.log(`server started at ${port}`)

})*/
connectDB()
  .then(() => {
      console.log("Database connected successfully! ");
      app.listen(port, () => {
          console.log(`Server started at ${port} `);
      });
  })
  .catch((err) => {
      console.error("Database connection failed! ", err);
  });