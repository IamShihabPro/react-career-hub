import React from 'react';
import { AddressIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
  

const SingleCard = ( {featureData} ) => {
    const {id, name, picture, company, title, address, salary, Job1, Job2} = featureData
    return ( 
           <div className='my-container border w-96 drop-shadow-md rounded'>
                <img src={picture} alt="" className='w-32 h-20	' />
                <h2 className='font-bold  text-xl'>{title}</h2>
                <p className='text-gray-400'>{name}</p>
                <div className='flex gap-4'>
                    <p className=''> 
                     {address}
                     </p>

                    <p>Salary: ${salary}</p>

                </div>
                <div className='mb-1 flex gap-6'>
                    <button className='border-2 border-sky-500/100 p-2 mt-4 text-sky-500'>{Job1}</button>
                    <button className='border-2 border-sky-500/100 p-2 mt-4 text-sky-500'>{Job2}</button>
                </div>
                <Link to={`/feature/${id}`} className='btn md:w-auto md:mr-4 mt-6'>
                    <div className='inline-flex items-center justify-center w-full h-full'>
                        
                    <p className='mr-3'>View Details</p>
                    </div>
                </Link>           
           </div>
    );
};

export default SingleCard;