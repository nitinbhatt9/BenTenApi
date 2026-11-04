import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const alien_dataX = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGOOSE_URI}${process.env.DATABASE_NAME}`,
    );
    console.log(`MONGODB CONNECTED`);
  } catch (error) {
    console.error(`error`, error);
  }
};

export default alien_dataX;
