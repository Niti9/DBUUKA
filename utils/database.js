import mongoose from "mongoose";

let isConnected = false; //track the connection

const db = process.env.MONGODB_URI;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  //else condition
  try {
    await mongoose.connect(
      "mongodb+srv://Nit:N.I.T.I.N@cluster0.0shci4t.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "share_prompt",
      }
    );
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
