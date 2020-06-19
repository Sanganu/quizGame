// Using Plain JS Script
// DOM element pointers
const questcont = document.getElementById("question");
const gameContainer = document.querySelector("#gameContainer");
const startbut  = document.getElementById("start-game");

//Hide Blocks
gameContainer.style.display = "none";

// console.log(questions)
//Global Variables
let currentQuiz = 0;

//OnClick Event Listeners
startbut.addEventListener("click",function(){
    questcont.style.display = "block";
    startbut.style.display="none";
    displayQuestion()
});


function displayQuestion(){
    console.log(questions[currentQuiz].question)
    let qtext = document.createElement("h5");
    qtext.textContent = questions[currentQuiz].question;
    let option1 = document.createElement("button");
    option1.textContent = questions[currentQuiz].options[0];
    option1.setAttribute("answer",questions[currentQuiz].answer);
    let option2 = document.createElement("button");
    option2.textContent = questions[currentQuiz].options[1];
    option2.setAttribute("answer",questions[currentQuiz].answer);
    questcont.appendChild(qtext);
    questcont.appendChild(option1);
    questcont.appendChild(option2);
}