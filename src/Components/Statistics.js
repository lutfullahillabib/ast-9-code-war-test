import React, { useContext } from 'react';
import { QuizContext } from './Main';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = useContext(QuizContext);

    // console.log(data);

    // const e = data.map(k => k.total);
    // console.log(e);

    return (
        <div className='py-32 bg-blue-300' >

            <div>
                <h2 className=' text-2xl md:text-3xl mb-5 font-semibold'>Quiz-Chart (name vs total ques.)</h2>
            </div>
            {/* aspect={1} */}
            <div data-aos="zoom-in-down" data-aos-easing="ease-in-cubic" data-aos-duration="1000">
                <ResponsiveContainer width={"70%"} height={400} className='mx-auto pt-10' >
                    <AreaChart
                        // width={50}
                        // height={50}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Statistics;