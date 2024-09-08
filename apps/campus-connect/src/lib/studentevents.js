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
    city:String,
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
   subcategory:String,
   studentfaq:{type: [faq],
    default:{
      question: "nfb",
      answer: "djfn"
      
    }
    
   },
sponfaq:{type: [faq],
    default:{
      question: "nfb",
      answer: "djfn"
      
    }
    
   },
pitchtech:String,
   
   offer:{type:[avail]},


   isopentosponsor:Boolean
  
   
   
  

    
  }
);

export default mongoose.models.event || mongoose.model("event", Item);