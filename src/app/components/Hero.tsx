import React from 'react'
import Image from 'next/image'
import ad1 from '../components/Assets/Ads 1.png'
import { Button } from "@/components/ui/button"
import Link from "next/link";
import bg from '../Components/Assets/BG.png'



export default function Hero() {
  return (
    <><div className='w-[1340px] h-[360px] flex mt-4  '>
          <Image className='ml-3' src={ad1} alt='/' />
          <div className="flex items-center  bg-[#3563E9]   w-auto rounded-lg ml-4 p-4 px-5">
              <div className="text-white ml-5 flex flex-col justify-center space-y-4 sm:w-[150px] md:w-[200px] lg:w-[400px] ">
                  <div className="flex items-center gap-2">
                      {/* <FaApple className="w-[50px] h-[50px]" /> */}
                      <span className=" sm:text-2xl md:text-2xl lg:text-3xl ">Easy way to rent a car at a low price </span>
                  </div>
                  {/* heading */}
                  <h1 className="   sm:text-sm md:text-1xl   text-2xl">Providing cheap car rental services and safe and comfortable facilities.</h1>
                  <Button className='w-[100px] bg-[#54A6FF] rounded-lg'> Rental Car</Button>
              </div>
              <Image className="w-[400px] -mr-2 h-[300px] bg-[#3563E9]" src={bg} alt="iphone" />
          </div>
      </div>
       
        </>
  )
};

 