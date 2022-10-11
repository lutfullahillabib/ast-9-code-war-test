import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from "./Header";

export const QuizContext = createContext([]);

const Main = () => {

    const { data } = useLoaderData();

    return (
        <div>
            <QuizContext.Provider value={data}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </QuizContext.Provider>
        </div>
    );
};

export default Main;