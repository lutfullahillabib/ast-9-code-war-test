import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const quizes = useLoaderData().data;
    console.log(quizes);

    const { name } = quizes;

    return (
        <div>
            <h2>Details</h2>
        </div>
    );
};

export default Details;