import mongoose from "mongoose";

const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI,{
    dbName: "PORTFOLIO"
  }).then(() => {
    console.log("Successfully connected to database");
  }).catch((error) => {
    console.log(`Some error occurred while connecting to database: ${error}`);
  })
}

export default dbConnection;