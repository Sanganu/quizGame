// Using Plain JS Script
// DOM element pointers
const questcont = document.getElementById("question");
const gameContainer = document.querySelector("#gameContainer");
const startbut  = document.getElementById("start-game");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");
const alloptions = document.getElementsByClassName("options");
const rightList = document.getElementById("rightlist");
const wrongList = document.getElementById("wronglist");
const timer = document.getElementById("timer");

//Hide Blocks
gameContainer.style.display = "none";
rightList.style.display="none";
wrongList.style.display="none";


for(let i=0;i<alloptions.length;i++){
    alloptions[i].onclick = validateUserResponse
}
// console.log(questions)
//Global Variables
let currentQuiz = 0;

//OnClick Event Listeners
startbut.addEventListener("click",function(){
    gameContainer.style.display = "block";
    startbut.style.display="none";
    rightList.style.display="block";
wrongList.style.display="block";
    displayQuestion()
});


function displayQuestion(){
    questcont.textContent = questions[currentQuiz].question;
    option1.textContent = questions[currentQuiz].choices[0];
    option2.textContent = questions[currentQuiz].choices[1];
    option3.textContent = questions[currentQuiz].choices[2];
    option4.textContent = questions[currentQuiz].choices[3];
}


function validateUserResponse(){
    console.log("This",this.getAttribute("option-value"))
    var userAnswer = parseInt(this.getAttribute("option-value"))
    if( userAnswer === questions[currentQuiz].answer ){
        let textElement = document.createElement("p")
        textElement.textContent = questions[currentQuiz].question
        textElement.classList.add("text-center")
        rightList.appendChild(textElement)
    }
    else{
        let textElement = document.createElement("p")
        textElement.textContent = questions[currentQuiz].question
        textElement.classList.add("text-center")
        wrongList.appendChild(textElement)
    }
    if(currentQuiz<questions.length-1){
        currentQuiz++;
        displayQuestion();
    }
    else{
        console.log("End")
    }
}