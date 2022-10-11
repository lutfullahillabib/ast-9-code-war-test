import React from 'react';

import Lottie from 'lottie-react'
import reader from '../Components/imgs/91736-exams.json'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="relative flex flex-col lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                            A quick, quiz for
                            <br className="hidden md:block" />
                            prgrammers{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                to test Skills.
                            </span>
                        </h2>
                        <p className="text-base text-white md:text-lg">
                            Welcome, to <span className='text-blue-200'>Code-War-Test</span>. This is a website to test your skills of programming languages & IT knowledge.
                        </p>
                    </div>
                    <div className="flex justify-center items-center md:flex-row">
                        <Link
                            to="/blog"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md lg:w-auto  md:mb-0 bg-blue-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            Blog
                        </Link>

                    </div>
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                {/* <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                /> */}
                <Lottie animationData={reader} loop={true} />
            </div>
        </div>
    );
};

export default Banner;