import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import SingleTopic from './SingleTopic';

const Topics = () => {
    const topics = useLoaderData().data;

    // console.log(topics);

    return (
        <div>
            <div className='py-24 bg-stone-500'>
                <Banner></Banner>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 bg-stone-500'>
                {
                    topics.map(topic => <SingleTopic
                        key={topic.id}
                        topic={topic}
                    ></SingleTopic>)
                }
            </div>
        </div>
    );
};

export default Topics;