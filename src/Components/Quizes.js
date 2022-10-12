import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ques from './Ques';

const Details = () => {
    const quizes = useLoaderData().data;
    // console.log(quizes);

    const { id, logo, total, name, questions } = quizes;

    return (
        <div className='py-5 bg-blue-400 text-white'>
            <div className='flex justify-center items-center'>
                <h1 className='text-5xl font-bold text-black p-3 cus-style' >Quiz Topic: <span className='text-blue-700 '>{name}</span></h1>
                <img src={logo} alt="" className='h-20 w-20 bg-black rounded-full p-2' data-aos="zoom-in" data-aos-duration="1500" />
            </div>
            <div >
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