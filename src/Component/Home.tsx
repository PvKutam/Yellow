import Link from "next/link";
import { Navigation } from "./Navigation";

type IProps= {
    children: React.ReactNode;
  }
export  function Home({children}:IProps) {

  return (
  <div>
    <Navigation />
    <div className="min-h-screen flex flex-col">
        {/* //Navigation */}
        {children}
    </div>


  </div>
  )
  
  
}