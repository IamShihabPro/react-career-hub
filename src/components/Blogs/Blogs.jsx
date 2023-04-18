import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='my-container grid lg:grid-cols-2 justify-center text-center gap-6'>
                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>When should we used context api</h2>
                    <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. If we only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
                </div>

                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>What is custom hooks</h2>
                    <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. A custom hook does not require a specific signature.</p>
                </div>

                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>What is useRef</h2>
                    <p>useRef is a built-in react hook that accepts one argument as the initial value and returns a reference. A reference is an object having a special property current.</p>
                </div>

                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>What is useMemo</h2>
                    <p>useMemo is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
                </div>

            </div>
            
        </div>
    );
};

export default Blogs;