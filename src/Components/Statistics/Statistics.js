import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const loadStatistics = useLoaderData()
    const chirt = loadStatistics.data;
    return (
    <div className='container mx-auto text-center bg-black my-20'>
            <BarChart width={300} height={300} data={chirt} >
				<Bar dataKey="total" fill="#8884d8" /> 
				<XAxis dataKey="name" scale="point" padding={{ left: 20, right: 10 }} />
				<YAxis />
				<Tooltip />
			</BarChart>
    </div>

    );
};

export default Statistics;