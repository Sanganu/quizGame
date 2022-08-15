// DOM Elements
// let ele_divcontainer = document.getElementById("quizContainer");
// let start_button = document.getElementById("startQuiz");
// let ele_div = document.getElementById("box");
// let question_div = document.querySelector("#displayQuestion");
// let option1_button = document.getElementById("choice1");
// let option2_button = document.getElementById("choice2");
// let timer_p = document.getElementById("timer");
// let timerID = 0;
// let timevalue = 500;
// let container = document.getElementById("quizSection") ;
// let ptag = document.createElement("p");
// timer_p.style.display = "none";

// // Variables
// var timer =50;
// let i = 0;
// let wins = 0;
// let loss = 0;

// // Add Event Listeners
// start_button.addEventListener("click",startGame);


// function displayQuestion(){
//   container.textContent = ""
//   timer_p.style.display = "block";

//   ptag.textContent = questions[i].question;
//   let button1 = document.createElement("button");
//   button1.setAttribute("value",questions[i].options[0]);
//   button1.setAttribute("answer",questions[i].answer);
//   button1.setAttribute("class","optionclick");
//   button1.textContent = questions[i].options[0];
//   button1.onclick = checkoptionselected;
//   let button2 = document.createElement("button");
//   button2.setAttribute("value",questions[i].options[1]);
//   button2.setAttribute("answer",questions[i].answer);
//   button2.textContent = questions[i].options[1];
//   button2.setAttribute("class","optionclick");
//   button2.onclick = checkoptionselected;
//   container.appendChild(ptag);
//   container.appendChild(button1);
//   container.appendChild(button2)
// }

// function startGame(){
//    console.log("Game")
//    i =0;
//    timevalue = 150;
//    timerID = setTimeout(mytimer,100);

//    displayQuestion();
// }

// function mytimer(){
//   if (timevalue > 0){
//     timevalue--;
//     timer_p.textContent = timevalue
//   }
//   else{
//     displayResults();
//   }
// }

// function checkoptionselected(event){
//   let userchoice = this.value;
//   let answer = this.getAttribute("answer");
//   console.log("USer",userchoice,"answer",answer);
//   if ( userchoice === answer){
//     wins++
//     timevalue = timevalue+10;
//   }
//   else{
//     loss++;
//     timevalue = timevalue - 15;
//   }
//   if (timevalue <= 0)
//   { console.log("Time up");
//     alert("Time up")
//     displayResults();
//   }
//   if (i< questions.length-1){
//     i++;
//     displayQuestion();
//   }
//   else{
//     displayResults();
//   }
// }

// function displayResults(){

//    container.innerHTML = `<h5>Results</h5><p> wins - ${wins} : Loss - ${loss}</p><p>Time Left:${timevalue}`;
//    clearTimeout(timerID);
// }
let subtractionLS = JSON.parse(localStorage.getItem("subtractionlist")) || []
let  subtractionData = []
if (subtractionLS.length !== 0) {
   subtractionData = subtractionLS.map(ele => ele.right + ele.time - ele.missed - ele.wrong)
}

    


const ctxs = document.getElementById('subtractionChart').getContext('2d');
const myCharts = new Chart(ctxs, {
    type: 'bar',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'score',
            data: subtractionData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis:'y',
        
    }
});

let multiplicationLS = JSON.parse(localStorage.getItem("multiplicationlist")) || []
let multiplicationData = []
if (multiplicationLS.length !== 0) {
     multiplicationData = multiplicationLS.map(ele => ele.right + ele.time - ele.missed - ele.wrong)
} 
const ctxm = document.getElementById('multiplicationChart').getContext('2d');

const myChartm = new Chart(ctxm, {
    type: 'bar',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'score',
            data: multiplicationData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis:'y',
    }
});

let divisionLS = JSON.parse(localStorage.getItem("divisionlist")) || []
let divisionData = []
if (divisionLS.length !== 0) {
     divisionData = divisionLS.map(ele => ele.right + ele.time - ele.missed - ele.wrong)
    console.log(divisionData)
} 
const ctxd = document.getElementById('divisionChart').getContext('2d');
const myChartd = new Chart(ctxd, {
    type: 'bar',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'score',
            data: divisionData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis:'y',
    }
});


let additionLS = JSON.parse(localStorage.getItem("additionlist")) || []
let additionData = []
if (additionLS.length !== 0) {
     additionData = divisionLS.map(ele => ele.right + ele.time - ele.missed - ele.wrong)

}
const ctxa = document.getElementById('additionChart').getContext('2d');
const myCharta = new Chart(ctxa, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'score',
            data: additionData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis:'y',
    }
});
