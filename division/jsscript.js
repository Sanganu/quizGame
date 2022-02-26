// Using Plain JS Script
// DOM element pointers
const questcont = document.getElementById("question");
const gameContainer = document.querySelector("#gameContainer");
const startBtn = document.getElementById("start-game");
const endBtn = document.getElementById("end-game");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");
const alloptions = document.getElementsByClassName("options");
const rightList = document.getElementById("rightlist");
const wrongList = document.getElementById("wronglist");
const timer = document.getElementById("timer");


//Add Event Listiner
endBtn.addEventListener("click",endQuiz)
//Hide Blocks
gameContainer.style.display = "none";
rightList.style.display="none";
wrongList.style.display="none";
endBtn.style.display = "none";

// Variables in Global scope
let rightCount = 0;
let wrongCount = 0;
let countTimer = 0;
let timerId ;
let currentQuiz = 0;


//OnClick Event Listeners
option1.addEventListener("click",validateUserResponse)
option2.addEventListener("click",validateUserResponse)
option3.addEventListener("click",validateUserResponse)
option4.addEventListener("click",validateUserResponse)


startBtn.addEventListener("click",function(){
    gameBtn = document.getElementById("end-game");
    gameContainer.style.display = "block";
    startBtn.style.display="none";
    endBtn.style.display="block";
    rightLisBtn = document.getElementById("end-game");
    rightList.style.display="block";
    wrongList.style.display="block";
    timerId = setInterval(displayTimer,1000);
    displayQuestion()
});

function displayTimer(){
   countTimer++;
   timer.textContent = countTimer;
}
function displayQuestion(){
    questcont.textContent = questions[currentQuiz].question;
    option1.textContent = questions[currentQuiz].choices[0];
    option2.textContent = questions[currentQuiz].choices[1];
    option3.textContent = questions[currentQuiz].choices[2];
    option4.textContent = questions[currentQuiz].choices[3];
}


function validateUserResponse(event){
    event.preventDefault()
    console.log("This",this.getAttribute("data-option-value"))
    var userAnswer = parseInt(this.getAttribute("data-option-value"))

    if( userAnswer === questions[currentQuiz].answer ){
        let textElement = document.createElement("span")
        textElement.textContent = questions[currentQuiz].question
        textElement.classList.add("answer");
        rightList.appendChild(textElement);
        rightCount++;
    }
    else{
        let textElement = document.createElement("span")
        textElement.textContent = questions[currentQuiz].question
        textElement.classList.add("answer")
        wrongList.appendChild(textElement);
        wrongCount++;
    }
    if(currentQuiz<questions.length-1){
        currentQuiz++;
        displayQuestion();
    }
    else{
        console.log("End");
        endQuiz();
    }
}


function endQuiz(){
    gameContainer.style.display = "none";
    console.log(`Result Right:${rightCount} Wrong:${wrongCount} Time:${countTimer} Missed: ${questions.length - currentQuiz}`)
    let division = {
        right: rightCount,
        wrong: wrongCount,
        time: countTimer,
        missed: questions.length - currentQuiz
    }
    let divisionLS = JSON.parse(localStorage.getItem("divisionlist")) || []
    divisionLS.push(division)
    localStorage.setItem("divisionlist",JSON.stringify(divisionLS))
    clearInterval(timerId)
}