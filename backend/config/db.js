import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Node.js Connected: ${conn.connection.host}`);
  } catch (error) { // <--- If this is "error"
    console.error(`❌ Error: ${error.message}`); // <--- This must also be "error"
    process.exit(1);
  }
};

export default connectDB;