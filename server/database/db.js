import mongoose from "mongoose";

const Connection = async (username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-aqozdhd-shard-00-00.hnuvxv0.mongodb.net:27017,ac-aqozdhd-shard-00-01.hnuvxv0.mongodb.net:27017,ac-aqozdhd-shard-00-02.hnuvxv0.mongodb.net:27017/?ssl=true&replicaSet=atlas-sap4ux-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
       await mongoose.connect(URL,{UseNewUrlParser: true});
       console.log("Connection Successful");
    }
    catch(error){
       console.log('Error while connecting to the database',error);
    }
}
export default Connection;