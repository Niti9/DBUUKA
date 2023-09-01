import mongoose from "mongoose";

let isConnected = false; //track the connection

const db = process.env.MONGODB_URI
export const connectToDB = async ()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }
    //else condition
    try{
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName:"share_prompt",
        })
        isConnected = true;
        console.log("MongoDB connected");
    }
    catch(error)
    {
        console.log(error);
    }
    
}

