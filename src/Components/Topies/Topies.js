import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Topies = () => {
    const projects = useLoaderData()
    return (
        <div>
           <h1>{projects.data.length}</h1>
           {
            projects.map((project)=>console.log(project))
           }
        </div>
    );
};

export default Topies;