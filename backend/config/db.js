import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
<<<<<<< HEAD
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${err.message}`);
=======
    console.log(`Node.js Connected: ${conn.connection.host}`);
  } catch (error) { // <--- If this is "error"
    console.error(`❌ Error: ${error.message}`); // <--- This must also be "error"
>>>>>>> b93e098 (chore: initialize project with package.json and vercel.json configuration)
    process.exit(1);
  }
};

export default connectDB;