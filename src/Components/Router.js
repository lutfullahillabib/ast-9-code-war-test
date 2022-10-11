import { createBrowserRouter } from "react-router-dom";
import Main from './Main';
import NF from './NF';
import Topics from './Topics';
import Statistics from './Statistics';
import Blog from './Blog';
import Quizes from './Quizes';
import { quizQues, quizTopics } from "./Loader";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: quizTopics,
        errorElement: <NF />,
        children: [
            {
                path: '/',
                loader: quizTopics,
                element: <Topics></Topics>
            },
            {
                path: '/topics',
                loader: quizTopics,
                element: <Topics></Topics>
            },
            {
                path: '/quiz/:id',
                loader: quizQues,
                element: <Quizes></Quizes>
            },
            {
                path: '/statistics',
                loader: quizTopics,
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },

])
