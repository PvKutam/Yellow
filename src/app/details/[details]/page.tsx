
"use client"

import { useHousedData } from "../../../Component/Details";
import { ImageGrid } from "../../../Component/HousingData"
import { Footer } from "../../../Component/Footer";




const productpage = ({params}:{
    params:{details: string}
}) => {
    const id = Number(params.details);
    const { getDataById } = useHousedData();
    const house = getDataById(id);

  console.log(house);
    
    

  return (

    <div className="flex flex-col">
    <div className="flex bg-white w-fit  mx-auto">
    <ImageGrid />
    <div className=" flex flex-col items-center justify-start mx-auto text-right gap-4 w-1/3">
      <div className="flex text-4xl pt-14">  
        <h2 className="text-blue-700 w-[70%] flex-wrap "> {house?.title}</h2>
      </div>
        <p className="max-w-sm text-center text-xl "> {house?.description}</p>
        <div className="grid grid-cols-2 gap-4">
        <h3 className="text-md bg-blue-600 px-6 py-2 text-center text-white rounded-md  hover:bg-blue-900 focus:ring-4 focus:ring-primary-300"> Rent :{house?.Rent}</h3>
        <h3  className="text-md bg-blue-600 px-6 py-2 text-center text-white rounded-md  hover:bg-blue-900 focus:ring-4 focus:ring-primary-300"> SQFT: {house?.SQft}</h3>
        <h3 className="text-md bg-blue-600 px-6 py-2 text-center text-white rounded-md  hover:bg-blue-900 focus:ring-4 focus:ring-primary-300">Constructed: {house?.Year}</h3>
        </div>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default productpage


