import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Area } from 'recharts';


const Statistics = () => {

    const data = [
        {
          name: 'Assignment-1',
          your_marks: 57,
          total_marks: 60,
        },
        {
          name: 'Assignment-2',
          your_marks: 58,
          total_marks: 60,

        },
        {
          name: 'Assignment-3',
          your_marks: 60,
          total_marks: 60,
  
        },
        {
          name: 'Assignment-4',
          your_marks: 60,
          total_marks: 60,
           
        },
        {
          name: 'Assignment-5',
          your_marks: 60,
          total_marks: 60,
          
        },
        {
          name: 'Assignment-6',
          your_marks: 51,
          total_marks: 60,
          
        },
        {
          name: 'Assignment-7',
          your_marks: 59,
          total_marks: 60,
          
        },
        {
          name: 'Assignment-8',
          your_marks: 60,
          total_marks: 60,
          
        },
      ];
         
    return (
        <div className='mt-16 items-center flex flex-col justify-center'>
          <h2 className='font-bold text-2xl mb-8'>All Assignment Record</h2>

            <ResponsiveContainer width="50%"aspect={2} >
              <BarChart data={data} width={500} height={500}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="your_marks" fill='#8883d8' >

                </Bar>
                                
              </BarChart>
            </ResponsiveContainer>
      </div>
    );
};

export default Statistics;