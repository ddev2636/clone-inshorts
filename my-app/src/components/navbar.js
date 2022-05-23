import React from 'react';
import {FcDatabase} from "react-icons/fc";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  return (
    <>      
<div className=' px-2 sm:px-4 py-2.5 rounded flex   drop-shadow-2xl content-center'>
<ul class="flex border-b">  
  <li>  
  <h1>
    <FaBars size='3rem'  className='px-2 text-gray-800 mt-3 mr-72'/>      
    </h1>
  </li>
  <li>
<img src='http://techstory.in/wp-content/uploads/2016/01/Inshorts_logo.png' alt='inshorts' className='h-14 md:h-16 lg:h-20 ml-48'/>
  </li>
</ul>
  </div>
    </>
  );
}

export default Navbar;