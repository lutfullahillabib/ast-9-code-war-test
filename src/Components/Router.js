import { createBrowserRouter } from "react-router-dom";
import Main from './Main';
import NF from './NF';
import Topics from './Topics';
import Statistics from './Statistics';
import Blog from './Blog';
import Quizes from './Quizes';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Topics></Topics>
            },
            {
                path: '/topics',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz');
                },
                element: <Topics></Topics>
            },
            {
                path: '/quiz/:id',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
                },
                element: <Quizes></Quizes>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },

    { path: '*', element: <NF></NF> },
])
