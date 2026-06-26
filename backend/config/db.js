/*import mongoose from "mongoose";
import dns from "dns";

const connectDB = async () => {
    try {
        console.log("MONGO_URI =", process.env.MONGO_URI);
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Local MongoDB Connected Successfully");
    } catch (error) {
        console.log("Database Connection Error :", error.message);
        throw error;
    }
};

export default connectDB;
*/
import mongoose from "mongoose";
import dns from "dns";

const connectDB = async () => {
  try {
    // Force Node's internal network engine to look up MongoDB Atlas using Google DNS
    dns.setServers(["8.8.8.8", "8.8.4.4"]);

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;