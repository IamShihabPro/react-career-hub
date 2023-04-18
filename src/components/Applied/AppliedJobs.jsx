import React from 'react';
import { getApplyJob } from '../../Utils/FakeDb';
import { useLoaderData } from 'react-router-dom';
import SendData from '../SendData/SendData';

const AppliedJobs = () => {
    const {newArray} = useLoaderData()
  
    console.log(newArray);
      
    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                    <h2 className='text-xl font-bold'> {newArray.length ? "Review Your Jobs" : "Please Apply For Jobs"} </h2>

                    <ul className='flex flex-col divide-y divide-gray-700'>
                        {newArray.map(apJob => <SendData key={apJob.id} apJob={apJob} ></SendData> )}
                    </ul>
            </div>
        </div>
    );
};

export default AppliedJobs;