import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utils/FakeDb';

const JobDetails = () => {
    const SendData = createContext()
    const [details, setDetails] = useState({})
    const data = useLoaderData()
    const {FeatureId} = useParams()
    
    useEffect(()=>{
        if(data){
            const detailsData = data.find(dt=> dt.id === FeatureId)
            setDetails(detailsData);
        }
    },[])  


    const handleShowData = (id)=>{
        console.log(id);
        addToDb(id)
    }

    return (
        <div className='my-container grid lg:grid-cols-2 gap-6 justify-between mx-6'>
            <div>
                <img src={details.picture} alt="" className='w-32' />
                <h2 className='font-bold'>Company name: {details.name}</h2>
                <h2><span className='font-bold'>Job Description:</span> {details.description} </h2>
                <h2><span className='font-bold'>Job Responsibility:</span> {details.responsibility} </h2>
                <h2><span className='font-bold'>Education:</span> {details.educational} </h2>
                <h2><span className='font-bold'>Experiences:</span> {details.experiences} </h2>
            </div>
            <div className=''>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col w-96 mt-32 ml-32 px-10 py-10 drop-shadow-lg rounded'>
                    <h2 className='font-bold text-lg text-center py-2'>Job Details</h2>
                    <hr />
                    <h2 className='flex mt-3'><span className='font-bold flex mr-3 items-center'> <svg className='w-4' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg> Salary: </span> {details.salary} (Per month)</h2>

                    <h2 ><span className='font-bold'> Job Title:</span> {details.title}</h2>

                    <h2 className='font-bold text-lg text-center py-2'>Job Information</h2>
                    <hr />

                    <h2 className='mt-3'><span className='font-bold'>Phone:</span> {details.phone}</h2>
                    <h2><span className='font-bold'>Email:</span> {details.email}</h2>
                    <h2><span className='font-bold'>Address:</span> {details.address}</h2>
                
                </div>
                    <button onClick={()=> handleShowData(details.id)} className='btn md:w-auto md:mr-4 mt-3 ml-64'> Apply Now </button>
                
            </div>
        </div>
    );
};

export default JobDetails;