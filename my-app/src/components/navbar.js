import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    let Links =[
      {name:"All news ",link:"/"},
      {name:"India",link:"/"},
      {name:"Business",link:"/"},
      {name:"Sports",link:"/"},
      {name:"World",link:"/"},
      {name:"Politics",link:"/"},
      {name:"technology",link:"/"},
      {name:"Entertainment",link:"/"},
      {name:"Science",link:"/"},
      {name:"Automobile",link:"/"},
      {name:"Startup",link:"/"},
    ];
    let [open,setOpen]=useState(false);  return (
    

    <div className='flex h-20 w-full  fixed bg-white justify-between align-middle pr-10  lg:pt-0 lg:shadow-xl'>
      <div onClick={()=>setOpen(!open)} className=' text-2xl md:text-3xl absolute top-5 md:top-9 left-8  cursor-pointer '>
      <FaBars/>
       </div>
       <div>
        <ul className='pt-20 md:pt-18 items-center'>{
        Links.map((link)=>(
             <li key={link.name} className={`${open ? 'block':'hidden'} bg-gray-100 text-md md:p-4 p-1 w-64  align-middle md:text-xl`}>
               <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500 '>{link.name}</a>
             </li>
           ))}
        </ul>
       </div>
     <img src='http://techstory.in/wp-content/uploads/2016/01/Inshorts_logo.png' alt='inshorts' className='h-14 md:h-16 pt-2 lg:h-20 '/>
    </div>
  )
}

export default Navbar