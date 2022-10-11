import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ques from './Ques';

const Details = () => {
    const quizes = useLoaderData().data;
    // console.log(quizes);

    const { id, logo, total, name, questions } = quizes;

    return (
        <div className='py-5 bg-stone-500 text-white' >
            <div>
                <h1 className='text-5xl font-bold text-black p-3' >Quiz Topic: <span className='text-gray-200'>{name}</span></h1>
            </div>
            <div>
                {
                    questions.map((ques, idx) => <Ques
                        key={ques.id}
                        ques={ques}
                        idx={idx}
                    ></Ques>)
                }
            </div>
        </div>
    );
};

export default Details;