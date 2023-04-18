import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../SingleCard/SingleCard';

const FeatureJob = (handlerAddApplied) => {
    const featureDatas = useLoaderData()
    return (
        <div>
            <h2 className='font-bold text-center text-xl mt-6'>Featured Jobs</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className='my-container -mt-8 grid lg:grid-cols-2 gap-6'>
            {
                featureDatas.map(featureData => <SingleCard key={featureData.id} featureData={featureData}  ></SingleCard> )
            }
           </div>
           
        </div>
    );
};

export default FeatureJob;