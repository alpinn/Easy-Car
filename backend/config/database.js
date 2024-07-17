import mongoose from 'mongoose';

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connected');
  } catch (error) {
    console.log('Error connecting to database:', error);
    process.exit(1);
  }
}

export default connectToMongoDB;