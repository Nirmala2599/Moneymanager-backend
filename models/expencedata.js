const mongoose =require("mongoose");

const expenceSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    roll:{
        type:String,
        required: true,
        unique:true,
    },
    amount:{
        type:String,
        required: true
    },
   
        category:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    
   
},{timestamps: true}
);
var expencedata = mongoose.model('expencedata',expenceSchema);
module.exports=expencedata;