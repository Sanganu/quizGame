const quizContEl = document.getElementById("quiz-container");
const startBtnEl = document.getElementById("start-quiz");
const timerEl = document.getElementById("timer")
const scoreEl = document.getElementById("score")
const h4El = document.createElement("h4");
const h5El = document.createElement("h5");
const button1El = document.createElement("button");
const button2El = document.createElement("button");
const button3El = document.createElement("button");
const button4El = document.createElement("button");

function renderHTMLElements() {
        //     const h3El = document.createElement("h3");
        //     quizContEl.appendChild(h3El);
        //     for (let i = 1; i <= 4; i++) {
        //         const btn1El = document.createElement("button");
        //         quizContEl.appendChild(btn1El);
        //     }
            // Quiz Container
            quizContEl.appendChild(h4El)
            quizContEl.appendChild(button1El);
            quizContEl.appendChild(button2El);
            quizContEl.appendChild(button3El);
            quizContEl.appendChild(button4El);
            
            //Timers and Scores

}


let questionIndex = 0;
let timer = 10 * questions.length;
let timerObject;
let score=0;
const spanSEl = document.createElement("span")
scoreEl.appendChild(spanSEl)
scoreEl.classList.add("hide");
timerEl.classList.add("hide")


startBtnEl.addEventListener("click", function () {
  startBtnEl.classList.add("hide")
  renderHTMLElements();
  getQuestion();
  startTimerScore()
})

function getQuestion(){
    h4El.textContent = questions[questionIndex].question;
    h4El.classList.add("question")
    button1El.textContent = questions[questionIndex].choices[0];
    button2El.textContent = questions[questionIndex].choices[1];
    button3El.textContent = questions[questionIndex].choices[2];
    button4El.textContent = questions[questionIndex].choices[3];
}


quizContEl.addEventListener("click",function(event){
  console.log("current",event.target.tagName)
  if(event.target.tagName === 'BUTTON'){
      console.log("button",event.target.textContent)
      if(event.target.textContent=== questions[questionIndex].answer){
          score+=5;
          spanSEl.textContent = score
      }else{
         timer-=10;
      }
      if(questionIndex < questions.length-1){
          questionIndex++;
          getQuestion();
      }else{
         summary()
      }
  }
})

function summary(){
    clearInterval(timerObject);

}

function startTimerScore(){
    scoreEl.classList.remove("hide");
    timerEl.classList.remove("hide")
    timerEl.textContent = "Timer :  ";
    const spanEl = document.createElement("span")
    timerEl.appendChild(spanEl)
    scoreEl.textContent = "Score : "
    timerObject = setInterval(()=>{
        
        spanEl.textContent = timer;
        if(timer > 1){
            timer--;
        }else{
            summary()
        }
    },1000)
}