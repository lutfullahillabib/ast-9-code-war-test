import React from 'react';
import { Link } from 'react-router-dom';

const SingleTopic = ({ topic }) => {
    // console.log(topic);

    const { name, logo, total, id } = topic;

    return (
        <div>
            <div
                className="group grid grid-cols-1 overflow-hidden rounded-lg border border-gray-100 sm:grid-cols-3 bg-black text-white"
            >
                <div className="relative">
                    <img
                        alt="Climber"
                        src={logo}
                        className="absolute inset-0 h-full w-full object-cover bg-zinc-500"
                    />
                </div>

                <div className="p-8 sm:col-span-2">
                    <ul className="flex gap-1">
                        <Link to={`/quiz/${id}`}>
                            <button
                                className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white"
                            >
                                Start Quiz
                            </button>
                        </Link>
                    </ul>

                    <h5 className="mt-4 font-bold">{name}</h5>

                    <p className="mt-2 text-sm text-gray-500">
                        Total Ques.: {total}
                    </p>
                </div>
            </div>


        </div>
    );
};

export default SingleTopic;