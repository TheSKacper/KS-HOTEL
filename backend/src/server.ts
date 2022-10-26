import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import orderRouter from './routers/booking.router'
import userRouter from './routers/user.router';
import offerRouter from './routers/offers.router'
import { dbConnect } from './configs/database.config';
import menuRouter from './routers/menu.router'

dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/menu",menuRouter)
app.use("/api/offers", offerRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);



const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})