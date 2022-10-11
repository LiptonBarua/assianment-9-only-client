import React from 'react';
import './Topie.css'
const Topie = ({topie}) => {
    const {id, name, logo, total} =topie;
    
    return (
        <div className='card p-2'>
             <img className='w-full' src={logo} alt="" />
            <h1>{name}</h1>
            <p>Total: {total}</p>
            <button>Add Click</button>
        </div>
    );
};

export default Topie;