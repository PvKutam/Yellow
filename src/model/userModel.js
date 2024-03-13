// import mongoose from "mongoose";

//   export const HouseSchema = new mongoose.Schema({
//     houseDetails:{
//         type: Number,
//         required:[true, "Please provide a  id"],
//         unique:true,
//     },
//     title:{
//         type: String,
//         required:[true, "Please provide a title"],
//     },
    
//     description:{
//         type: String,
//         required:[true, "Please provide a description"],
//     },
//     position:{
//         type:Number,
//         required:[true, "Please provide a accurate position"]
//     },
//     category:{
//         type: String,
//         required:[true, "Please mention a category"],
//     }

// })

// const  house = mongoose.model.house | mongoose.model("User",HouseSchema)
// export default house
 


    // houseid: Number,
    //     // required: [true, "Please provide an id"],
    //     // unique: true,
    // title: String,
    //     // required: [true, "Please provide a title"],
    // description: String,
    //     // required: [true, "Please provide a description"],
    
    // position :Number,
    //     // required: [true, "Please provide an accurate position"],
    
    // category:  String,

    
//     import mongoose from "mongoose";

//     export const HouseSchema = new mongoose.Schema({

//         houseid: Number,
//         title: String,
//         description: String,
//         location: {
//             type: {
//                 type: String,
//                 enum: ['Point'], 
//                 required: true
//             },
//             coordinates: {
//                 type: [Number],
//                 required: true
//             }
//         },        category:String,
         
//     });
    

// const HouseModel = mongoose.models.products || mongoose.model("products", HouseSchema);
// export default HouseModel;

import mongoose from "mongoose";

export const HouseSchema = new mongoose.Schema({
    houseid: {
        type: Number,
        required: [true, "Please provide an id"],
        unique: true,
    },
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    location: {
        type: {
            type: String,
            enum: ['Point'], 
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    category: {
        type: String,
        required: [true, "Please mention a category"],
    },
    Year:{
      type: Number,
    },  
    SQft:{
        type: Number,
    },
    Rent:{
        type: Number,
    }
});
HouseSchema.index({ location: "2dsphere" });

const HouseModel = mongoose.models.products || mongoose.model("products", HouseSchema);
export default HouseModel;

