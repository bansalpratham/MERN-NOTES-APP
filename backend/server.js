import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import noteRoutes from './routes/notes.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/api/users' , authRoutes)
app.use('/api/notes' , noteRoutes)

app.get('/' , (req,res)=>{
    res.send("Hello World");
})

connectDB();

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})
