

const mongoose = require("mongoose");

//const MONGO_URI = "mongodb+srv://krishabhdeveloper:Krishabh@cluster0.180zifk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async()=>{ 
  try{  
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
    
    const tutSchema = mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        work:{
            type:string,
            require:true
        }

    })

    const collection = new mongoose.model('tut', tutSchema);

    data={
        name:"krishabh", Work:"developer"
    }

    collection.insertMany([data])
     
    }catch(error){
    error.message;
}
}



module.exports ={connectDB}; 
