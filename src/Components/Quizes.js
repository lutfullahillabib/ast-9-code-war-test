import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ques from './Ques';

const Details = () => {
    const quizes = useLoaderData().data;
    // console.log(quizes);

    const { name, questions } = quizes;

    return (
        <div>
            <h2>Quiz Topic: {name}</h2>
            {
                questions.map((ques, idx) => <Ques
                    key={idx}
                    ques={ques}
                ></Ques>)
            }
        </div>
    );
};

export default Details;