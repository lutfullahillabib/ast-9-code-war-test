
const quizTopics =
    async () => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
    };

const quizQues =
    async ({ params }) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
    };

export { quizTopics, quizQues };
