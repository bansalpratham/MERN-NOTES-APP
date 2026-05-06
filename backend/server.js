import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import noteRoutes from './routes/notes.js';
<<<<<<< HEAD
=======
import path from 'path';
>>>>>>> b93e098 (chore: initialize project with package.json and vercel.json configuration)
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
<<<<<<< HEAD
=======

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  // Any route that is not an API route will serve index.html
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
}
>>>>>>> b93e098 (chore: initialize project with package.json and vercel.json configuration)
