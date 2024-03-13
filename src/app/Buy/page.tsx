"use client";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import {useEffect, useState} from 'react'
// import  { HousingData }  from "../../Component/HousingData"
import { MyMap } from "../../Component/MyMap"
import { Navigation } from "../../Component/Navigation"
import { log } from "console";
import { useHousedData} from "../../Component/Details"


export type HousingArea = {
  houseid: number;
  title: string;
  description: string;
  category: string;
  location: {
      type: string;
      coordinates: [number, number];
  };
}



const Sample = () => {
  const { housed, getDataById } = useHousedData();
  const [show,setShow]= useState(false)
  const [selectedHouseId, setSelectedHouseId] = useState<number | null>(null);

 

    const icon :Icon = new Icon({
        iconUrl:"next.svg",
        iconSize:[25,41],
        iconAnchor:[12,41]
    })
    console.log("Log before clicking",show);  

    const toggleShow =()=>{
      setShow(!show)
      console.log("Log after clicking",show);
      
    }
    

   useEffect(() => {
    console.log("Value inside the state (after state update):", housed);
    housed.forEach((house) => {
      const latitude = house.location.coordinates[1];
      const longitude = house.location.coordinates[0];
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
    });
  }, [housed]);
  


  return (
    <>
    <Navigation />
    <div className=" flex w-[100%] h-[100%] p-[1rem] mx-auto">
    <div className="flex flex-col w-full h-full">
    <MyMap 
  HousingData={housed} 
  icon={icon} 
 
/>
  
    </div>
  </div>
  </>
  )
}

export default Sample
