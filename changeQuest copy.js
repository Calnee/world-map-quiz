
const questions = new Map([

    [1, "Which continent is India part of?"],

    [2, "Which is the largest continent in area?"],

    [3, "Which is the smallest continent in area?"],

    [4, "Which continent is also called as an 'Island-Continent'?"],

    [5, "The largest mountain in the world, Mount Everest is situated in which continent?"],

    [6, "On Which Continent Is Egypt?"],

    [7, "On which continent can you find France?"],

    [8, "Which is the Second biggest continent of the world?"],

    [9, "Columbus found which continent?"],

    [10, "Where is Amazon River?"]

]);

// const questionCountInput = document.getElementById("questionCountInput");
// const numberOfQuestions = questionCountInput.value;
// console.log(`Number of questions entered: ${numberOfQuestions}`);
//let currentQuestionIndex = 1; // Initialize question index

// function changeQuestionRandom() {
//     const questionElement = document.getElementById("question");
//           // Generate a random index within the range of your questions
//     const randomIndex = Math.floor(Math.random() * questions.size) + 1;
//     // Update the question content using the randomly generated index
//     questionElement.textContent = questions.get(randomIndex) 
// }

let askedQuestions = []; // Array to keep track of asked questions

function changeQuest() {
    const questionElement = document.getElementById("question");
    
    if (askedQuestions.length === questions.size) {
        // If all questions have been asked, reset the askedQuestions array
        askedQuestions = [];
    }

    let randomIndex;
    do {
        // Generate a random index within the range of the questions
        randomIndex = Math.floor(Math.random() * questions.size) + 1;
    } while (askedQuestions.includes(randomIndex));

    // Update the question content using the randomly generated index
    questionElement.textContent = questions.get(randomIndex);

    // Add the asked question index to the askedQuestions array
    askedQuestions.push(randomIndex);
}


