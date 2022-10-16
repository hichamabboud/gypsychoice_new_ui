import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const userSignedIn = false;
    const [isOpen, setIsOpen] = useState(false);
    const mainNav = () => { 
        setIsOpen(!isOpen)
    }

  return (
    <nav>
        <div  className=" px-4 py-3 shadow-lg ">
              {!userSignedIn ?
                <div className=" flex items-center">
                  <span className=" text-xl font-semibold text-gray-600 after:content-['Choice'] after:text-sm after:text-blue-500 after:font-bold after:italic ">Gypsy</span>

                  <div className="flex items-center gap-1 ml-auto">

                      <span className=" capitalize text-xs font-semibold bg-white px-2 py-1 rounded-lg 
                      hover:bg-gray-300 hover:px-2 hover:py-1 hover:rounded-lg hover:cursor-pointer " > become a host </span>

                    {!isOpen ? 
                        <svg onClick={mainNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 2 22 20" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:scale-105 hover:cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        :
                        <svg onClick={mainNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    }
    
                  </div>

                </div> 
                  :
                <div className=" flex items-center">
                    <span className=" text-xl font-semibold text-gray-600 after:content-['Choice'] after:text-sm after:text-blue-500 after:font-bold after:italic ">Gypsy</span>

                    <div className="flex items-center gap-4 ml-auto">
                        <div>
                            <Image src="/images/user1.jpg" className=" rounded-full object-cover outline outline-gray-500 outline-offset-4 relative" width={"26px"} height={"26px"} alt=" member " />      
                            <span className=" h-2 w-2 inline-block bg-green-500 rounded-full absolute left-[435px] top-3 ring-gray-300 ring-1 ring-offset-1 "></span>
                        </div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
   
                    </div>
                </div> 
              }  
        </div>      
    </nav>
  )
}

export default Navbar

    