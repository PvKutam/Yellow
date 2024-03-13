"use clinet"
import {MapContainer,TileLayer,Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
// import  { ,getDataById }  from "../Component/HousingData"
import {HousingArea} from "../app/Rent/page"
import Link from "next/link";


type Mapprops={
    HousingData: HousingArea[];
    icon: Icon;

}

export function MyMap({ HousingData, icon }: Mapprops): JSX.Element{
    return(
        <MapContainer center={[12.9716, 77.5946]} zoom={13} className="w-[100%] h-[100%] relative rounded-md " > 
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {HousingData.map((house) => {
  if (house.location && house.location.coordinates && house.location.coordinates.length === 2) {
    // Destructure latitude and longitude from coordinates
    let latitude = house.location.coordinates[1];
    let longitude = house.location.coordinates[0];
    
    // Return JSX elements
    return (
      <Marker position={[latitude, longitude]} icon={icon} key={house.houseid}>
        <Popup>
          <div>
            <h1 style={{
              color: "#3558bc",
              fontWeight: "700",
              fontSize: "16px",
              paddingBottom: "5px",
              borderBottom: " 1px solid #c8bfbf"
            }}>{house.title}</h1>
          </div>
          <p style={{
            color: "Black",
            paddingBottom: "5px",
          }}>{house.description}</p>
          <Link href={`/details/${house.houseid}`} passHref>
            <button  style={{
              padding: "10px",
              backgroundColor: "#3558bc",
              borderRadius: "4px",
              width: "100px",
              color: "white"
            }}>View </button>
          </Link>
        </Popup>
      </Marker>
    );
  } else {
    return null; // Skip rendering if coordinates are not defined or incomplete
  }
})}


        </MapContainer>
    );
}
