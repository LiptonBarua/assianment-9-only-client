import React from 'react';
import { Link } from 'react-router-dom';
const Topie = ({topie}) => {
    const {id, name, logo, total} =topie;

    return (
        <div className='card p-2 bg-black text-white'>
             <img className='w-full' src={logo} alt="" />
            <h2 className='text-3xl py-2'>{name}</h2>
            <p>Total: {total}</p>
            
            <Link to={`/quiz/${id}`}><button className='w-full py-2 bg-blue-500 text-2xl  hover:bg-red-700 text-white '>Add Click</button></Link>
        </div>
    );
};

export default Topie;