import React from 'react';

const Blog = () => {
    const blog = {
        title: "Question and Answer",
        questionOne: "what is the purpose of react-router?",
        ansOne: "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL",
        questionTwo: "How does context API work?",
        ansTwo: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.",
        questionThree: "What is a useref?",
        ansThree: "Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <div ref={myRef} />  , React will set its .current property to the corresponding DOM node whenever that node changes."

    }

    return (
        <div className='flex flex-col justify-center items-center m-5 md:m-10 lg:m-20 p-5 md:p-10 mt-20'>
            <h1 className='text-6xl text-gray-700 font-extrabold' >{blog.title}</h1>
            <div className='mt-10'>
                <div>
                    <h1 className='text-2xl text-black font-bold' >{blog.questionOne}</h1>
                </div>
                <div>
                    <p className='text-gray-600 text-xl mt-2 text-justify'>{blog.ansOne}</p>
                </div>
            </div>

            <div className='mt-5' >
                <div>
                    <h1 className='text-2xl text-black font-bold'>{blog.questionTwo} </h1>
                </div>
                <div>
                    <p className='text-gray-600 text-xl mt-2 text-justify'>{blog.ansTwo}</p>
                </div>
            </div>

            <div className='mt-5'>
                <div>
                    <h1 className='text-2xl text-black font-bold'>{blog.questionThree}</h1>
                </div>
                <div>
                    <p className='text-gray-600 text-xl mt-2 text-justify'>{blog.ansThree}</p>
                </div>
            </div>

        </div >
    );
};

export default Blog;