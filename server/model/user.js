import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const user =mongoose.model('user',userSchema);//here user inside the model is a collection that will be created in the database

export default user;