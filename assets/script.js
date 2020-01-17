// DOM Elements
let ele_divcontainer = document.getElementById("quizContainer");
let start_button = document.getElementById("startQuiz");
let ele_div = document.getElementById("box");
let question_div = document.querySelector("#displayQuestion");
let option1_button = document.getElementById("choice1");
let option2_button = document.getElementById("choice2");
let timer_p = document.getElementById("timer");
let timerID = setTimeout(mytimer,100);
let timevalue = 150;
let container = document.getElementById("quizSection") ;
let ptag = document.createElement("p");
timer_p.style.display = "none";

// Variables
var timer =50;
let i = 0;
let wins = 0;
let loss = 0;

// Add Event Listeners
start_button.addEventListener("click",startGame);

 
function displayQuestion(){
  container.textContent = ""
  timer_p.style.display = "block";
  ptag.textContent = questions[i].question;
  let button1 = document.createElement("button");
  button1.setAttribute("value",questions[i].options[0]);
  button1.setAttribute("answer",questions[i].answer);
  button1.setAttribute("class","optionclick");
  button1.textContent = questions[i].options[0];
  button1.onclick = checkoptionselected;
  let button2 = document.createElement("button");
  button2.setAttribute("value",questions[i].options[1]);
  button2.setAttribute("answer",questions[i].answer);
  button2.textContent = questions[i].options[1];
  button2.setAttribute("class","optionclick");
  button2.onclick = checkoptionselected;
  container.appendChild(ptag);
  container.appendChild(button1);
  container.appendChild(button2)
}

function startGame(){
   console.log("Game")
   i =0;
   timevalue = 150;
   let interval = setInterval(mytimer,50);
   displayQuestion();
}

function mytimer(){
  if (timevalue > 0){
    timevalue--;
    timer_p.textContent = timevalue
  }
  else{
    displayResults();
  }
}

function checkoptionselected(event){
  let userchoice = this.value;
  let answer = this.getAttribute("answer");
  console.log("USer",userchoice,"answer",answer);
  if ( userchoice === answer){
    wins++
    timevalue = timevalue+10;
  }
  else{
    loss++;
    timevalue = timevalue - 15;
  }
  if (timevalue <= 0)
  { console.log("Time up");
    alert("Time up")
    displayResults();
  }
  if (i< questions.length-1){
    i++;
    displayQuestion();
  }
  else{
    displayResults();
  }
}

function displayResults(){
  
   container.innerHTML = `<h5>Results</h5><p> wins - ${wins} : Loss - ${loss}</p><p>Time Left:${timevalue}`;
   clearTimeout(timerID);
}