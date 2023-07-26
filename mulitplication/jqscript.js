const quizContEl = document.getElementById("quiz-container");
const startBtnEl = document.getElementById("start-quiz");
const timerEl = document.getElementById("timer")
const scoreEl = document.getElementById("score");
const endEl = document.getElementById("end-quiz")
const h4El = document.createElement("h4");
const h5El = document.createElement("h5");
const button1El = document.createElement("button");
const button2El = document.createElement("button");
const button3El = document.createElement("button");
const button4El = document.createElement("button");
const spanSEl = document.createElement("span")
const formEl = document.getElementById("save-user")
const resultsEl = document.getElementById("results")
const resultres = document.getElementById("scoreres")
let questionIndex = 0;
let timer = 3 * questions.length;
let timerObject;
let score = 0;
let wrong  =0;
let missed = []
function renderHTMLElements() {
    // Quiz Container
    quizContEl.appendChild(h4El)
    quizContEl.appendChild(button1El);
    quizContEl.appendChild(button2El);
    quizContEl.appendChild(button3El);
    quizContEl.appendChild(button4El);
    h4El.classList.add("question")
    scoreEl.classList.remove("hide");
    timerEl.classList.remove("hide")
    endEl.classList.remove("hide")
    endEl.addEventListener("click",summary)
    //Timers and Scores
}




scoreEl.classList.add("hide");
timerEl.classList.add("hide");
endEl.classList.add("hide");
resultsEl.classList.add("hide");

startBtnEl.addEventListener("click", function () {
    startBtnEl.classList.add("hide")
    renderHTMLElements();
    getQuestion();
    startTimerScore()
})

function getQuestion() {
    console.log(questionIndex)
    h4El.textContent = questions[questionIndex].question;
    button1El.textContent = questions[questionIndex].choices[0];
    button2El.textContent = questions[questionIndex].choices[1];
    button3El.textContent = questions[questionIndex].choices[2];
    button4El.textContent = questions[questionIndex].choices[3];
}


quizContEl.addEventListener("click", function (event) {
    console.log("current", event.target.tagName)
    if (event.target.tagName === 'BUTTON') {
        console.log("button", event.target.textContent)
        if (event.target.textContent == questions[questionIndex].answer) {
            score += 5;
            spanSEl.innerText = score
        } else {
            timer -= 10;
            wrong++;
            missed.push(questions[questionIndex].answer)
            spanSEl.innerText = score
        }
        if (questionIndex < questions.length - 1) {
            questionIndex++;
            getQuestion();
        } else {
            endQuiz()
           // summary()
        }
    }
})
function endQuiz(){
    clearInterval(timerObject);
    console.log("End quiz")
    resultsEl.classList.remove("hide")
    quizContEl.classList.add("hide")
    const h6ele = document.createElement("h6")
    h6ele.textContent = "Score :"+score+ " Missed:"+( questions.length -(questionIndex+1))
    const pele = document.createElement("p") 
    pele.textContent = missed.join(" ")
    const aele = document.createElement("a")
    aele.setAttribute("href","./results.html")
    aele.textContent  = "Summary"
    resultres.appendChild(h6ele)
    resultres.appendChild(pele)
    //  quizContEl.style.display = "none"     
}
function summary() {
    clearInterval(timerObject);
    console.log("End quiz")
    resultsEl.classList.remove("hide")
   // quizContEl.classList.add("hide")
     quizContEl.style.display = "none"
    let multiplicationScore = {
        right:score,
        wrong:wrong,
        time:3 * questions.length - timer,
        missed: questions.length -(questionIndex+1),
        date: moment().format('llll')
    }
    document.getElementById("timer-score").style.display = "none"
    let multiplicationLS = JSON.parse(localStorage.getItem("multiplicationlist")) || []
    multiplicationLS.push(multiplicationScore)
    localStorage.setItem("multiplicationlist", JSON.stringify(multiplicationLS))
    let summaryEle = document.getElementById("summary")
    for(let i=0; i <multiplicationLS.length;i++){
        let trEle = document.createElement("tr")
        let thEle1 = document.createElement("th")
        thEle1.textContent = multiplicationLS[i].right
        let thEle2 = document.createElement("th")
        thEle2.textContent = multiplicationLS[i].wrong
        let thEle3 = document.createElement("th")
        thEle3.textContent = multiplicationLS[i].time
        let thEle4 = document.createElement("th")
        thEle4.textContent = multiplicationLS[i].missed
        let thEle5 = document.createElement("th")
        thEle5.textContent = multiplicationLS[i].date
        trEle.appendChild(thEle1)
        trEle.appendChild(thEle2)
        trEle.appendChild(thEle3)
        trEle.appendChild(thEle4)
        trEle.appendChild(thEle5)
        summaryEle.append(trEle)
    }
}

function startTimerScore() {
    timerEl.textContent = "Timer :  ";
    const spanEl = document.createElement("span")
    timerEl.appendChild(spanEl)
    scoreEl.textContent = "Score : "
    scoreEl.appendChild(spanSEl)
    timerObject = setInterval(() => {

        spanEl.textContent = timer;
        if (timer > 1) {
            timer--;
        } else {
            summary()
        }
    }, 1000)
}
