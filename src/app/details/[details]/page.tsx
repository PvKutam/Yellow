
"use client"

import { Navigation} from "../../../Component/Navigation"
import { useHousedData } from "../../../Component/Details";
import { ImageGrid } from "../../../Component/HousingData"



const productpage = ({params}:{
    params:{details: string}
}) => {
    const id = Number(params.details);
    const { getDataById } = useHousedData();
    const house = getDataById(id);

  console.log(house);
    
    

  return (

    <>
  <Navigation />
    <div className="flex bg-white w-fit  mx-auto">
    <ImageGrid />
    <div className=" flex flex-col items-center justify-start  text-right gap-4">
      <div className="flex  gap-4 text-4xl pt-14">  
      <h2 >{house?.houseid}</h2>
        <h2 className="text-blue-700"> {house?.title}</h2>
      </div>
        <p className="max-w-sm text-center text-xl "> {house?.description}</p>
        <div className="grid grid-cols-2 gap-4">
        <h3 className="text-md bg-blue-600 px-6 py-2 text-center text-white rounded-md  hover:bg-blue-900 focus:ring-4 focus:ring-primary-300"> Rent :{house?.Rent}</h3>
        <h3  className="text-md bg-blue-600 px-6 py-2 text-center text-white rounded-md  hover:bg-blue-900 focus:ring-4 focus:ring-primary-300"> SQFT: {house?.SQft}</h3>
        <h3 className="text-md bg-blue-600 px-6 py-2 text-center text-white rounded-md  hover:bg-blue-900 focus:ring-4 focus:ring-primary-300">Constructed: {house?.Year}</h3>
        </div>
    </div>
    </div>
    </>
  )
}

export default productpage


