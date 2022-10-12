import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, useRouteError } from 'react-router-dom';

const NF = () => {
    const error = useRouteError();

    // console.log(error);

    return (
        <div>
            <Header></Header>
            <div>
                <section className="flex items-center h-full p-16  bg-stone-500 text-black">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-md text-center">
                            <h2 className="mb-8 font-extrabold text-9xl text-white">
                                <span className="sr-only">Error</span>404
                            </h2>

                            <p className=" text-2xl font-semibold md:text-3xl">Sorry, Error..!!</p>
                            <p className="mt-4 mb-8  text-gray-200">Please, Click the Button below to go to the Homepage.</p>

                            {error && (
                                <div>
                                    <p className='text-red-600 text-2xl font-semibold md:text-3xl'>{error.statusText || error.message}</p>

                                    <p className="text-white text-2xl mt-4 mb-8">{error.status}</p>
                                </div>
                            )}

                            <Link to='/' className="px-8 py-3 font-semibold rounded  bg-violet-400  text-gray-900 hover:bg-blue-600 hover:text-white">Back to homepage</Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NF;
