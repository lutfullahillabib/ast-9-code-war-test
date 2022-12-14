import React from 'react';
import { Link } from 'react-router-dom';

const SingleTopic = ({ topic }) => {
    // console.log(topic);

    const { name, logo, total, id } = topic;

    return (
        <div data-aos="zoom-in-down" data-aos-duration="700" data-aos-easing="ease-in-cubic">
            <div
                className="group grid grid-cols-1 overflow-hidden rounded-lg border border-gray-100 md:grid-cols-3 bg-black text-white"
            >
                <div className="relative">
                    <img
                        alt="Climber"
                        src={logo}
                        className=" h-full w-full object-cover bg-zinc-700"
                    />
                </div>

                <div className="p-8 sm:col-span-2">
                    <ul className="flex gap-1">
                        <Link to={`/quiz/${id}`}>
                            <button
                                className="inline-block rounded-full bg-blue-600 px-4 py-2 font-semibold text-white text-lg hover:bg-purple-600"
                            >
                                Start Quiz
                            </button>
                        </Link>
                    </ul>

                    <h5 className="mt-4 font-bold text-3xl">{name}</h5>

                    <p className="mt-2 text-sm text-gray-400">
                        Total Ques.: {total}
                    </p>
                </div>
            </div>


        </div>
    );
};

export default SingleTopic;