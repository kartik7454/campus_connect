import mongoose from "mongoose";

let faq = new mongoose.Schema({
    question: String,
    answer: String
    
  });

let item = new mongoose.Schema({
    id:String,
    title :String,
    creator:String,
    discription:String,
   image:String,
   price:Number,
   location:String,
   fromdate:Date,
   likes:[{type: String,
    
   }],
   sttime:String,
   entime:String,
   category:String,
   faq:{type: [faq],
    default:{
      question: "nfb",
      answer: "djfn"
      
    }
   }
 
  })


const Item = new mongoose.Schema(
  {
    id:String,
    email:String,
    item:{type:item}
   
   
   
  
   
   
  

    
  }
);

export default mongoose.models.favs || mongoose.model("favs", Item);