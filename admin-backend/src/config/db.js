import dns from 'node:dns';
try { dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']); } catch (e) {}
import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/schemesaathi';
  try {
    const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    console.log(`[Admin Backend] MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[Admin Backend] MongoDB connection warning: ${error.message}. Running in standalone mode`);
  }
};