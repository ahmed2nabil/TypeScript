import { timeStamp } from "console";
import mongoose  from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {type : String, required: true},
    username: {type : String, required: true},
    password : {type : String, required: true},
    profilePic : {type : String, required: true},
}, {timestamps : true}
)

module.exports = mongoose.model("User", UserSchema);