const{default: mongoose }=require("mongoose");

const connection ={}


export const connectToDB = async ()=>{
  try{
    if(connection.isConnected){
      console.log("using exsisting connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
console.log("connected")
  }
  catch(error){
    console.log(error)
  throw new Error ('error connecting to db')}
}