import mongoose from "mongoose";


let faq = new mongoose.Schema({
  name: String,
  url: String
  
});
const Item = new mongoose.Schema(
  {
    
    title :String,
    discription:String,
   image:String,
  likes:[{type: String,
    
   }],
   creator:String,
   category:String,
   links:{type: [faq]
    
   }
   
   
  
   
   
  

    
  }
);

export default mongoose.models.community || mongoose.model("community", Item);