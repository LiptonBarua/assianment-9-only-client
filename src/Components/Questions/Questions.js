import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const loaderPostData = useLoaderData();
   const questions = loaderPostData.data.questions;
//    console.log(questions);
    return (
        <div>
          {
            questions.map(question=><Question key={question.id} question={question}></Question>)
          }
        </div>
    );
};

export default Questions;