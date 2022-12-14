import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast, Zoom } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2';

import { EyeIcon } from '@heroicons/react/24/solid';


const Ques = ({ ques, idx }) => {
    // console.log(ques);
    const { correctAnswer, options, question, id } = ques;

    const handleQuizAns = (e) => {
        if (e === correctAnswer) {
            Swal.fire(
                'Congratulation..!!',
                `Your Ans. <b>"${e}"</b> is correct..!!`,
                'success'
            )
        }

        else {
            Swal.fire({
                icon: 'error',
                title: `Your Ans. <b>"${e}"</b> is Wrong..!!`,
                text: 'Oops...!!!',
                footer: `Please, try Again..!!`
            })
        }

    };

    // const notify = () => toast(`Ques-${idx}. Correct Ans is: ${correctAnswer}`);

    const notify = () => {
        toast.info(`Ques-${idx}. Correct Ans is: ${correctAnswer}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Zoom,
        });
    }

    idx++;

    // console.log(question);

    const qn = ((question.slice(3, (question.length - 4))).replace("&nbsp;", ' ')).replace("&nbsp;", '');

    return (
        <div className='md:p-10 md:m-20 p-5 m-5 bg-black rounded-lg break-words' data-aos="zoom-in" data-aos-duration="700">
            <div className='flex justify-center items-center p-3' >
                <h1 className='text-lg md:text-2xl text-gray-300 font-semibold md:text-justify text-left p-2' >
                    ({idx}). Question:
                    {" "}
                    <span className='text-white'>{qn}</span>
                </h1>

                {/* <span className='p-5 text-2xl cursor-pointer hover:text-blue-500'> */}


                <button onClick={notify} className='p-5 text-2xl cursor-pointer hover:text-blue-500'>

                    <FontAwesomeIcon icon={faEye} >
                    </FontAwesomeIcon>

                    {/* <EyeIcon className="h-6 w-6 text-blue-500" /> */}

                </button>

                <ToastContainer />

                {/* </span> */}

            </div>
            <div className='md:p-6 grid grid-cols-1 md:grid-cols-2 gap-5' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="700">

                {
                    // options.map(opt => console.log(opt))
                }

                {
                    options.map((opt, index) =>

                        <button
                            key={index}

                            className='border-4 rounded-2xl p-5 cursor-pointer hover:bg-blue-600 hover:text-black font-semibold text-lg mx-3'

                            // onChange={() => handleQuizAns(opt)}

                            onClick={() => handleQuizAns(opt)}
                        >

                            {opt}

                        </button>
                    )
                }
            </div>
        </div>


    );
};

export default Ques;

