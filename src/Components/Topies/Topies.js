import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topie from '../Topie/Topie';
import './Topies.css'

const Topies = () => {
    const loaderData = useLoaderData()
    const projects = loaderData.data;
    console.log(projects)
    return (
        <div className='card-container mx-8 md:mx-40 my-16 grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
           {
            projects.map(topie=> <Topie key={topie.id} topie={topie}></Topie>)
           }
        </div>
    );
};

export default Topies;