import { connectionString } from "../../../dbconfig/dbconfig"
import HouseModel from "../../../model/userModel"
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    if (connectionString === undefined) {
        throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect( connectionString!)
      const data = await HouseModel.find();
    
return NextResponse.json({
    result:data
})
}


// export async function POST() {
//     try {
//         if (!connectionString) {
//             return NextResponse.error();
//         }
        
//         await mongoose.connect(connectionString);

//         const newHouses = [
//             {
//                 houseid: 8,
//                 title: "Charming Bungalow",
//                 description: "Step into this charming bungalow and experience timeless elegance. Surrounded by beautiful gardens, it offers a peaceful retreat from the city.",
//                 location: {
//                     type: 'Point',
//                     coordinates: [77.6446, 12.9121]
//                 },
//                 category: "rent"
//             },
//             {
//                 houseid: 9,
//                 title: "Elegant Villa",
//                 description: "Live in luxury in this elegant villa. With its spacious layout and upscale amenities, it's perfect for those who appreciate the finer things in life.",
//                 location: {
//                     type: 'Point',
//                     coordinates: [77.6250, 12.9470]
//                 },
//                 category: "rent"
//             },
//             {
//                 houseid: 10,
//                 title: "Scenic Retreat",
//                 description: "Escape to this scenic retreat nestled amidst nature. With its picturesque surroundings and cozy interiors, it's an ideal getaway for relaxation and rejuvenation.",
//                 location: {
//                     type: 'Point',
//                     coordinates: [77.6250, 12.9570]
//                 },
//                 category: "rent"
//             }
            
            
//         ];
        
//         // const newHouse = new HouseModel({
           
//         //     houseid: 7,
//         //     title: "Modern Townhouse",
//         //     description: "Experience modern living in this spacious townhouse. With ample natural light and designer finishes, it's a place you'll love to call home.",
//         //     location: {
//         //         type: 'Point',
//         //         coordinates: [77.6408, 12.9784]
//         //     },
//         //     category: "rent"
//         // });
        
//         const savedHouse = await HouseModel.insertMany(newHouses);


//         return NextResponse.json({ result: savedHouse, success: true });
//     } catch (error) {
//         return NextResponse.error();
//     }
// }





