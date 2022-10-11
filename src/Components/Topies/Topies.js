import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topie from '../Topie/Topie';

const Topies = () => {
    const loaderData = useLoaderData()
    const projects = loaderData.data;
    return (
      <section>
        <div className='container text-2xl'>
            <h1 className='text-4xl text-center py-3 text-red-500 text-bolder'>Description of a Web Developer</h1>
            <h1 className='text-justify'>A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring they look good, run smoothly and offer easy access points with no loading issues between pages or error messages.</h1>
        </div>
        <div className='card-container mx-8 md:mx-40 my-16 grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
        {
         projects.map(topie=> <Topie key={topie.id} topie={topie}></Topie>)
        }
     </div>
      </section> 
    );
};

export default Topies;