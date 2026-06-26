import mongoose from "mongoose"
const itemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:trusted
    },
    image:{
        type:String,
        required:true
    },
    shop:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shop"
    },
    category:{
        type:String,
        enum:[ "Snacks",
            "Main Course",
            "Desserts",
            "Pizza",
            "Burgers",
            "Sandwiches",
            "South Indian",
            "North Indiian",
            "Gujrati",
            "Chinese",
            "Fast Food",
            "Others"
        ],
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    foodtype:{
        type:String,
        enu:["veg","non veg"],
        required:true

    }


},{timestamps:true})

const Item=mongoose.model("Item",itemSchema)
export default Item