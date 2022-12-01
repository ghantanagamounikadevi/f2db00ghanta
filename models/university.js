const mongoose = require("mongoose") 
const universitySchema = mongoose.Schema({ 
university_type: {
   type:String,
   required:true
}, 
 size:{
   type:String,
   required:true
 },
 cost:{
    type:Number,
    min:1000,
    max:50000
 }
 
}) 
 
module.exports = mongoose.model("university", universitySchema)