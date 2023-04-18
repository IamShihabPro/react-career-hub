import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import JobCategory from '../JobCategory/JobCategory';
import FeatureJob from '../FeatureJob/FeatureJob';
import SingleCard from '../SingleCard/SingleCard';

const Home = () => {
    const featureDatas = useLoaderData()
    const [showAll, setShowAll] = useState(false)
    const handleShowAll = ()=>{
        setShowAll(!showAll)
    }

    return (
        <div>
            <div className='my-container flex flex-col items-center justify-between lg:flex-row bg-gray-100'>
            {/* Text Content */}
            <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                <div className='max-w-xl mb-6 lg:mt-8'>
                <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                One Step Closer To Your
                {/* <br className='hidden md:block' /> thousand lives{' '} */}
                    <span className='inline-block text-blue-400'> Dream Job</span>
                </h2>
                <p className='text-base text-gray-700 md:text-lg'>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                <Link to='/applied' className='btn md:w-auto md:mr-4'>
                    <div className='inline-flex items-center justify-center w-full h-full'>
                    <p className='mr-3'>Get Started</p>
                    
                    </div>
                </Link>
                </div>
                
            </div>
            <div>
                <img src="https://www.mozshaq.co.mz/wp-content/uploads/revslider/carreira_slider/career-bussines-man.png" alt="" />
            </div>
        </div>
        <JobCategory ></JobCategory>
        <div>
            <h2 className='font-bold text-center text-xl mt-6'>Featured Jobs</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className='my-container -mt-8 grid lg:grid-cols-2 gap-6'>
            {
                featureDatas.slice(0, showAll ? 8 : 4 ).map(featureData => <SingleCard key={featureData.id} featureData={featureData}></SingleCard> )
            }
           </div>
        </div>
            
            <div className='flex justify-center'>
            <button onClick={handleShowAll} className='btn mb-6'>See All</button>
            </div>
        
        </div>
     
        );

};

export default Home;