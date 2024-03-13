"use client"
import { useState, useEffect } from 'react';

export type HousingArea = {
  houseid: number;
  title: string;
  description: string;
  category: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  Year:number;
  Rent:number;
  SQft:number;

};



export const useHousedData = () => {
  const [housed, setHoused] = useState<HousingArea[]>([]);

  useEffect(() => {
    const fetchData = async () => {
     try {
         const response = await fetch("http://localhost:3000/api/product")
         if (!response.ok) {
             throw new Error("Failed to fetch data");
         }
         const data = await response.json();
         setHoused(data.result)  
     } catch (error) {
         console.log("Error fetching data:", error);
     }
 };

     fetchData();
 }, []);

  const getDataById = (id: number): HousingArea | undefined => {
    return housed.find((data) => data.houseid === id);
  };

  return { housed, getDataById };
};
