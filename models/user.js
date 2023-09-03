import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [
    //   /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    //   "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    
    //or this can be quit enough for email regex
    /^[A-Za-z][A-Za-z0-9_]{4,29}$/  
  ],
  },
  image: {
    type:String,
  },
});

//some times every time connection is established from scratch or begining
//to prevent from these we use "models.User || " now both condition will check
const User = models.User || model("User", UserSchema);

export default User;
