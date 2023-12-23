import  express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
const app= express();
const PORT=process.env.PORT || 8080;
dotenv.config();

// datase connection
connectDB();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth',authRoutes);

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to ecomerce app</h1>")

} )

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})