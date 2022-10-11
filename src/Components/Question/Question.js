import React from 'react';

const Question = ({ans}) => {
    const{id,question, options}=ans;
    return (
        <div className='container bg-light p-10 my-10 shadow-lg'>
            <h1 className='text-justify'>{question}</h1>
            <from class="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className='bg-black text-white p-5 text-center flex items-center'>
             
             <label for={options[0]}><input type="radio" id={options[0]} name="contact" value="email" checked />{options[0]}</label>
             </div>

         <div className='bg-black text-white p-5 text-center flex items-center'>
         
             <label for={options[1]}><input type="radio" id={options[1]} name="contact" value="email" checked />{options[1]}</label>
         </div>
        <div className='bg-black text-white p-5 text-center flex items-center'>
            
             <label for={options[2]}> <input type="radio" id={options[2]} name="contact" value="email" checked />{options[2]}</label>
        </div>

       <div className='bg-black text-white p-5 text-center flex items-center'>
             
             <label for={options[3]}><input type="radio" id={options[3]} name="contact" value="email" checked />{options[3]}</label>
       </div>
</from>
        </div>
    );
};

export default Question;