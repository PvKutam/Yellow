import { HousingArea } from "../app/Rent/page"
import Image from "next/image";
import image1 from "../../public/pexels-m&w-studios-90317.jpg";
import image2 from "../../public/pexels-pixabay-271624.jpg";
import image3 from "../../public/pexels-terry-magallanes-2635038.jpg";
import image4 from "../../public/pexels-vecislavas-popa-1571460.jpg";
import image5 from "../../public/pexels-curtis-adams-3288104.jpg";
import image6 from "../../public/pexels-pixabay-237371.jpg";



export const Images =[
image1,image2,image3,image4,image5,image6
]



export function ImageGrid(): React.ReactNode {
    return (
        <div className=" p-10 grid grid-cols-2 gap-4">
            {Images.map((img, index) => (
                <div key={index} className="relative">
                    <Image
                    className=" h-auto max-w-full rounded-lg mx-auto"
                        src={img}
                        width={500}
                        height={500}
                        alt={`Image ${index + 1}`}
                    />
                </div>
            ))}
        </div>
    );
}

// export const HousingData:HousingArea[]= [
//     {
//         id:1,
//         title:"Great view",
//         description:"wdjwdjwddw wdjwdjwbdjwdwdjk woihdbhefiekbjwcubih jebfhnjcbihdwuj",
//         position: [12.9716,77.5946],
//         category:"rent",
//     },
//     {
//         id:2,
//         title:"New view",
//         description:"wdjwdjwddw wdjwdjwbdjwdwdjk woihdbhefiekbjwcubih jebfhnjcbihdwuj",
//         position: [12.9720,77.59],
//         category:"rent",
//     },
//     {
//         id:3,
//         title:"Great view",
//         description:"wdjwdjwddw wdjwdjwbdjwdwdjk woihdbhefiekbjwcubih jebfhnjcbihdwuj",
//         position: [12.9698, 77.7500],
//         category:"rent",
//     },
//     {
//         id:4,
//         title:"New view",
//         description:"wdjwdjwddw wdjwdjwbdjwdwdjk woihdbhefiekbjwcubih jebfhnjcbihdwuj",
//         position: [12.9357, 77.6250],
//         category:"rent",
//     },
//     {
//         id:5,
//         title:"Great view",
//         description:"wdjwdjwddw wdjwdjwbdjwdwdjk woihdbhefiekbjwcubih jebfhnjcbihdwuj",
//         position: [12.9352, 77.6245],
//         category:"rent",
//     },
//     {
//         id:6,
//         title:"New view",
//         description:"wdjwdjwddw wdjwdjwbdjwdwdjk woihdbhefiekbjwcubih jebfhnjcbihdwuj",
//         position: [12.9780,77.5970],
//         category:"rent",
//     },
//     {
//         id:7,
//         title:"Great view",
//         description:"wdjwdjwddw wdjwdjwbdjwdwdjk woihdbhefiekbjwcubih jebfhnjcbihdwuj",
//         position: [12.9784, 77.6408],
//         category:"rent",
//     },
//     {
//         id:8,
//         title:"New view",
//         description:"wdjwdjwddw wdjwdjwbdjwdwdjk woihdbhefiekbjwcubih jebfhnjcbihdwuj",
//         position: [12.9121, 77.6446],
//         category:"rent",
//     },
//     {
//         id:9,
//         title:"New view",
//         description:"wdjwdjwddw wdjwdjwbdjwdwdjk woihdbhefiekbjwcubih jebfhnjcbihdwuj",
//         position: [12.9470, 77.6250],
//         category:"rent",
//     },
//     {
//         id:10,
//         title:"New view",
//         description:"wdjwdjwddw wdjwdjwbdjwdwdjk woihdbhefiekbjwcubih jebfhnjcbihdwuj",
//         position: [12.9570, 77.6250],
//         category:"rent",
//     },   
// ];





