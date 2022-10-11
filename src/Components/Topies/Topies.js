import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topie from '../Card/Topie';

const Topies = () => {
    const projects = useLoaderData()
    return (
        <div>
           <h1>{projects.data.length}</h1>
        </div>
    );
};

export default Topies;