import Image from 'next/image'
import Link from 'next/link'

export function Feature(){
    return(
        <div>
           <section>
    <div className="w-full min-h-screen bg-gray-900 relative">
      
      <div className=" max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40">
           <h1 className="text-white text-4xl lg:text-5xl font-bold text-center py-4">
        Welcome to Your Next Home
        </h1>
        <p className="text-white mt-8 mb-4 text-lg text-center font-normal">
        Explore our wide range of services and find your dream home today. Don't just take our word for it—see what 
        leaders in the digital world are saying about us.
        </p>
        <div className="mx-auto pt-24">
          <div className="w-full flex flex-wrap justify-around">
           
              <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105">
                 <Link href="/Buy">  
                <div className="h-64 z-20 ">
                  <Image
                   alt='buyimage'
                    src="https://cdn.dribbble.com/userupload/7611705/file/original-c8525e797c8648fb26cced88a90f5c83.png?resize=752x"
                    className="h-full w-full object-cover overflow-hidden rounded"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative">
                  <p className="uppercase font-bold text-md text-gray-700 text-center py-2">Buy a home</p>
                  <p className="text-gray-500 text-center pb-1 text-sm">No matter what path you take to buy your home, we can help you </p>
                </div>
                </Link>
              </div>
              <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105" >
                   <Link href="/Rent">  
                <div className="h-64 z-20">
                  <Image
                    alt='Rentimage'
                    src="https://cdn.dribbble.com/userupload/8761273/file/original-48e51887799d3be1692e80ddd7d91682.png?resize=1200x1200"
                    className="h-full w-full object-cover overflow-hidden rounded"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative">
                  <p className="uppercase  font-bold text-md text-gray-700 text-center pb-1">Rent a home </p>
                  <p className="text-gray-500 text-center pb-1 text-s">We're creating a seamless online experince -from shopping on the largest rental network, to applying, to paying rent.</p>
                </div>
                </Link>

              </div>
              <div className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105"  >
               <Link href="/Loan">  
                <div className="h-64 z-20">
                  <Image
                  src="https://cdn.dribbble.com/userupload/8102575/file/original-7f1a19fa6b64585f13f9717655aea85d.png?resize=1200x1169"
                    className="h-full w-full object-cover overflow-hidden rounded"
                    alt='Financeimage'
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative">
                  <p className="uppercase font-bold text-md text-gray-700 text-center pb-1">Finance a House </p>
                  <p className="text-gray-500 text-center pb-1 text-sm">Yellow Home loans can get you a pre-approved so you're ready to maka an offer quickly when you find the right home </p>
                </div>
                </Link>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}