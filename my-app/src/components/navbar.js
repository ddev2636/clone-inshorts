// import React from 'react';
// import { FaBars } from "react-icons/fa";




// const Navbar = () => {
  
  
//   return (
//     <>      
// <div className=' px-2 sm:px-4 py-2.5 rounded flex justify-between lg:shadow-lg md:shadow-md content-center mb-10'>
// <ul >  
//   <li>  
  
//     <FaBars size='3rem'  className='px-2 text-gray-800 lg:mt-3 justify-start cursor-pointer' />      
    
//   </li>  
// </ul>
// <img src='http://techstory.in/wp-content/uploads/2016/01/Inshorts_logo.png' alt='inshorts' className='h-14 md:h-16 lg:h-20 justify-end'/>
//   </div>
//     </>
//   );
// }

// export default Navbar;


import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    let Links =[
      {name:" ",link:"/"},
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"/"},
      {name:"ABOUT",link:"/"},
      {name:"BLOG'S",link:"/"},
      {name:"CONTACT",link:"/"},
      {name:"CONTACT",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);  return (
    // <div className='shadow-md w-full  top-0 left-0 flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            
      
    //   <div onClick={()=>setOpen(!open)} className='text-3xl absolute left-8 top-6 cursor-pointer '>
    //  <FaBars/>
    //   </div>
    //  <ul>
    //   <li className={`xl:flex xl:items-center xl:pb-0 pb-12 absolute xl:static bg-white xl:z-auto z-[-1] left-0 w-full xl:w-full  xl:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-0 ':'top-[-16rem]'} pt-20 pb-20`}>
    //     {
    //       Links.map((link)=>(
    //         <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 3xl:hidden'>
    //           <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500 2xl:hidden'>{link.name}</a>
    //         </li>
    //       ))
    //     }
    //     </li>
      
    //   <li>
    //   <img src='http://techstory.in/wp-content/uploads/2016/01/Inshorts_logo.png' alt='inshorts' className='h-14 md:h-16 lg:h-20 '/>
    //   </li>
    //   </ul>
      
    // </div>

    <div className='flex h-20 w-full  fixed bg-white justify-between align-middle pr-10  lg:pt-0 lg:shadow-xl'>
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute top-6 md:top-9 left-8  cursor-pointer '>
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