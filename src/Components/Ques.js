import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'


const Ques = ({ ques }) => {
    console.log(ques);
    const { correctAnswer, options, question } = ques;

    const handleQuizs = (e) => {
        if (e === correctAnswer) {
            Swal.fire(
                'Good job!',
                'You clicked the right answer!',
                'success'
            )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your Ans is Wrong!',
                footer: '<a href="">pls try again</a>'
            })
        }

    };

    const notify = () => toast(`Correct Ans is: ${correctAnswer}`);

    return (
        <div className='shadow-lg p-5 m-20 bg-gray-300 rounded-lg'>
            <div className='flex justify-center items-center' >
                <h1 className='text-3xl text-gray-600' ><span className='font-bold' >Question:</span> {question} </h1>
                <span className='ml-5'>
                    <button onClick={notify} ><FontAwesomeIcon icon={faEye} ></FontAwesomeIcon></button>
                    <ToastContainer />
                </span>

            </div>
            <div className='p-10 grid grid-cols-2 gap-5 ' >
                {
                    options.map((opt, index) =>
                        <label className=' border-2 p-5'>
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

