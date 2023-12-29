import  express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoutes.js";
import cors from "cors";

const app= express();
const PORT=process.env.PORT || 8080;


dotenv.config();

// datase connection
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);
app.use("/api/v1/category", categoryRoutes);

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to ecomerce app</h1>")

} )

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})