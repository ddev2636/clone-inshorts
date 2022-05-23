import React from 'react';
import {FcDatabase} from "react-icons/fc";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  return (
    <>      
<div className=' px-2 sm:px-4 py-2.5 rounded flex justify-between lg:shadow-lg md:shadow-md content-center mb-10'>
<ul >  
  <li>  
  <h1>
    <FaBars size='3rem'  className='px-2 text-gray-800 lg:mt-3 justify-start'/>      
    </h1>
  </li>  
</ul>
<img src='http://techstory.in/wp-content/uploads/2016/01/Inshorts_logo.png' alt='inshorts' className='h-14 md:h-16 lg:h-20 justify-end'/>
  </div>
    </>
  );
}

export default Navbar;