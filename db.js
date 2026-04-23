import mongoose from "mongoose";

const ConnectDB= async ()=>{
  try {
      await mongoose.connect(process.env.AMMAR)
      console.log("connected to DB")
  } catch (error) {
      console.error("Error connecting to DB:", error)
  }



}

export default ConnectDB