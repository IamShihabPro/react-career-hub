import React from 'react';
import {CalculatorIcon, ComputerDesktopIcon, PencilSquareIcon, HomeModernIcon} from '@heroicons/react/24/solid'

const JobCategory = () => {
    return (
        <div className='my-container'>
            <h2 className='font-bold text-center text-2xl'>Job Category List</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid lg:grid-cols-4 mt-4 gap-6 text-center'>

                <div className='bg-gray-300 p-5 flex flex-col justify-center rounded-md drop-shadow-md'>
                    <CalculatorIcon className='w-8 text-black'></CalculatorIcon>
                    <h2 className='font-bold'>Account & Finance</h2>
                    <p className='text-gray-800'>300 Jobs Available</p>
                </div>

                <div className='bg-gray-300 p-5 flex flex-col justify-center rounded-md drop-shadow-md'>
                    <PencilSquareIcon className='w-8 text-black'></PencilSquareIcon>
                    <h2 className='font-bold'>Creative Design</h2>
                    <p className='text-gray-800'>100+ Jobs Available</p>
                </div>

                <div   className='bg-gray-300 p-5 flex flex-col justify-center rounded-md drop-shadow-md'>
                    <HomeModernIcon className='w-8 text-black'></HomeModernIcon>
                    <h2 className='font-bold'>Marketing & Sales</h2>
                    <p className='text-gray-800'>150 Jobs Available</p>
                </div>

                <div  className='bg-gray-300 p-5 flex flex-col justify-center rounded-md drop-shadow-md'>
                <ComputerDesktopIcon  className='w-8 text-black'></ComputerDesktopIcon>
                    <h2 className='font-bold '>Engineering Job</h2>
                    <p className='text-gray-800'>224 Jobs Available</p>
                </div>
                
            </div>
        </div>
    );
};

export default JobCategory;