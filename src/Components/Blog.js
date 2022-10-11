import React from 'react';

const Blog = () => {

    return (
        <div>


            <div className="flex justify-center items-center gap-3 py-8 bg-stone-500">

                <div className="h-1 bg-white w-full"></div>

                <h1 className="text-white text-4xl">Blog</h1>

                <div className="h-1 bg-white w-full"></div>

            </div>
            {/* ... */}

            <h1 className="text-center text-white text-4xl bg-stone-500">Some React Interview Questions.</h1>



            {/*  */}
            <div className='flex justify-center items-center py-16 bg-stone-500'>
                <div className="w-3/4 space-y-4">
                    {/* Q-1 */}
                    <details className="group border-l-4 border-blue-500 bg-black p-6 text-white" >
                        <summary className="flex cursor-pointer items-center justify-between text-gray-300  hover:text-blue-500">
                            <h5 className="text-lg font-medium">
                                What is the Purpose of React-Router?
                            </h5>

                            <span
                                className="ml-1.5 flex-shrink-0 rounded-full bg-gray-200  hover:bg-blue-500 p-1.5 text-gray-900 sm:p-3 "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-justify">
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        </p>
                    </details>
                    {/* Q-2 */}
                    <details className="group border-l-4 border-blue-500 bg-black p-6 text-white" >
                        <summary className="flex cursor-pointer items-center justify-between text-gray-300  hover:text-blue-500">
                            <h5 className="text-lg font-medium">
                                How does Context API work?
                            </h5>

                            <span
                                className="ml-1.5 flex-shrink-0 rounded-full bg-gray-200  hover:bg-blue-500 p-1.5 text-gray-900 sm:p-3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-justify">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                            <br /><br />
                            Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                            <br /><br />
                            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        </p>
                    </details>
                    {/* Q-3 */}
                    <details className="group border-l-4 border-blue-500 bg-black p-6 text-white" >
                        <summary className="flex cursor-pointer items-center justify-between text-gray-300  hover:text-blue-500">
                            <h5 className="text-lg font-medium">
                                What is useRef?
                            </h5>

                            <span
                                className="ml-1.5 flex-shrink-0 rounded-full bg-gray-200  hover:bg-blue-500 p-1.5 text-gray-900 sm:p-3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-justify">
                            useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                            <br /><br />
                            Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with {"<div ref={myRef} />"}  , React will set its .current property to the corresponding DOM node whenever that node changes.
                            <br /><br />
                            However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
                            <br /><br />
                            This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a {`current: ...`} object yourself is that useRef will give you the same ref object on every render.
                            <br /><br />
                            Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

                        </p>
                    </details>

                </div>

            </div>
        </div>
    );
};

export default Blog;