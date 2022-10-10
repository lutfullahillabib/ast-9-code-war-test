import React from 'react';

const Ques = ({ ques }) => {
    console.log(ques);
    const { correctAnswer, options, question } = ques;

    const handleQuizs = (e) => {
        if (e === correctAnswer) {
            alert('right');
        } else {
            alert('false');
        }
    };

    return (
        <div>
            <div>
                <h1><span>Question:</span> {question} </h1>
            </div>
            <div>
                {
                    options.map((opt, index) =>
                        <label className='flex justify-center items-center'>
                            <input type="radio"
                                name='quiz'
                                value={opt.value}
                                key={index}
                                className='mx-2'
                                defaultChecked={opt.value === correctAnswer}
                                onChange={() => handleQuizs(opt)}
                            />
                            {opt}
                        </label>
                    )
                }
            </div>
        </div>

    );
};

export default Ques;