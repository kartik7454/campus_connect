import mongoose from "mongoose";






const Item = new mongoose.Schema(
  {
    
    
   
   name:String,
   eventid:String,
   title:String,
    email:String
  
   
   
  

    
  }
);

export default mongoose.models.booking || mongoose.model("booking", Item);