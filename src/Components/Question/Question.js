import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Current from '../Current/Current';



const Question = ({ans}) => {
    const{id,question, options,correctAnswer}=ans;
    const [count, setCount]=useState()
const handclick=(id)=>{
  if(correctAnswer===id){
    toast.success("True !", {
        autoClose: 2000,
      });

      setCount(correctAnswer)
  }
  else {
    toast.error("False.", {
        autoClose: 2000,
      });
  }
}

    return (
        <div>
           
       
        <div className='container bg-light p-10 my-10 shadow-lg'>
           <h1>{count}</h1>
         <Link to={`/current/${id}`}><FontAwesomeIcon className='ml-[95%]' icon={faEye} /></Link>
            <h1 className='text-justify'>{question}</h1>
            <from class="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className='bg-black text-white p-5 text-center flex items-center'>
             <ToastContainer />
             <label onClick={()=>handclick(options[0])} for={options[0]}><input type="radio" id={options[0]} name="contact" value="email" checked />{options[0]}</label>
             </div>

         <div className='bg-black text-white p-5 text-center flex items-center'>
         <ToastContainer />
             <label onClick={()=>handclick(options[1])} for={options[1]}><input type="radio" id={options[1]} name="contact" value="email" checked />{options[1]}</label>
         </div>
        <div className='bg-black text-white p-5 text-center flex items-center'>
        <ToastContainer />
        
             <label onClick={()=>handclick(options[2])} for={options[2]}> <input type="radio" id={options[2]} name="contact" value="email" checked />{options[2]}</label>
        </div>

       <div className='bg-black text-white p-5 text-center flex items-center'>
       <ToastContainer />
             <label onClick={()=>handclick(options[3])} for={options[3]}><input type="radio" id={options[3]} name="contact" value="email" checked />{options[3]}</label>
       </div>
</from>
        </div>
        </div>
    );
};


export default Question;