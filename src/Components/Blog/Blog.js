import React from 'react';
import Header from '../Header/Header';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <Header></Header>
             <div className='container'>
             <h1>1: What is the purpose of React Router ?</h1>
            <p><span>Ans: </span>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>

            <h1>2: How does context Api work ?</h1>
            <p><span>Ans: </span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h1>3: What is useRef hook in React</h1>
            <p><span>Ans: </span>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
             </div>
        </div>
    );
};

export default Blog;