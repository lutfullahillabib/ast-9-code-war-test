import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ques from './Ques';

const Details = () => {
    const quizes = useLoaderData().data;
    // console.log(quizes);

    const { name, questions } = quizes;

    return (
        <div className='flex flex-col justify-center items-center' >
            <div>
                <h1 className='text-6xl font-bold text-gray-600' >Topic of {name}</h1>
            </div>
            <div className='mt-10 text-2xl' >
                {
                    questions.map(ques => <Ques ques={ques} key={ques.id} ></Ques>)
                }
            </div>
        </div>
    );
};

export default Details;