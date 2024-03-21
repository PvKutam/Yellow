import Link from "next/link";

type IProps= {
    children: React.ReactNode;
  }
export  function Home({children}:IProps) {

  return (
    <div className="min-h-screen flex flex-col">
        {children}
    </div>
  )
  
  
}