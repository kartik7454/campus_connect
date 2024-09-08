import mongoose from "mongoose";


let faq = new mongoose.Schema({
  question: String,
  answer: String
  
});
let avail = new mongoose.Schema({
    name: String,
   price:Number
    
  })
const Item = new mongoose.Schema(
  {
    
    title :String,
    discription:String,
   image:String,
   
   location:String,
   fromdate:Date,
   creator:String,
   sttime:String,
   entime:String,
   category:String,
   offer:{type:[avail]},
city:String,
   faq:{type: [faq],
    default:{
      question: "nfb",
      answer: "djfn"
      
    }
   }
   
   
  
   
   
  

    
  }
);

export default mongoose.models.sponevent || mongoose.model("sponevent", Item);