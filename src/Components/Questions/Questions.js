import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const loaderPostData = useLoaderData();
   const questions = loaderPostData.data.questions;
  //  console.log(questions);
    return (
        <div>
          {
            questions.map(ans=><Question key={ans.id} ans={ans}></Question>)
          }
        </div>
    );
};

export default Questions;