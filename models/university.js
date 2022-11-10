const mongoose = require("mongoose") 
const universitySchema = mongoose.Schema({ 
university_type: String, 
 size: String, 
 cost:Number 
}) 
 
module.exports = mongoose.model("university", universitySchema)