import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopic from './SingleTopic';

const Topics = () => {
    const topics = useLoaderData().data;

    // console.log(topics);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-5 '>
            {
                topics.map(topic => <SingleTopic
                    key={topic.id}
                    topic={topic}
                ></SingleTopic>)
            }
        </div>
    );
};

export default Topics;