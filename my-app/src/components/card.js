import React from 'react'

const Card = ({newsall}) => {
  return (
      <div>
      {newsall.map((news)=>{
        const {id,name,content,image,heading}=news;
        return(
            
        
    <div key={id} className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row  sm:w-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 content-center mb-4">
    <img className="object-cover w-96 h-72 rounded-t-lg md:h-48 md:w-40 lg:w-72 lg:h-64 xl:h-auto xl:w-72 md:rounded-none md:rounded-l-md" src={image} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{name}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
        
    </div>
   </div>   
   
   
   
        )

      })}
      
   </div>
  )
}

export default Card;