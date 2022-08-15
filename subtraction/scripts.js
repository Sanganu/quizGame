// console.log("Subtraction", questions)
$("#submitAnswers").hide()
let timerCount = 90;
let timerObj;

const renderQuestions = () => {
    for (let i = 0; i < questions.length; i++) {
        let secContainer = $(`<div>`, {
            class: "inputCont"
        })

        let labelDesc = $('<label>', {
            "text": `Q: ${questions[i].question}`,
            "for": `name-${i}`,

        })
        // console.log(labelDesc)
        // $("#subtractQuiz").append(labelDesc)
        secContainer.append(labelDesc)
        let inputDescription = $('<input>', {
            "class": 'subtractionQs',
            "name": `name-${i}`,
            "type": "number",
            "min": 0,
            "max": 120,
            "placeholder": questions[i].question,
            "data-value": questions[i].answer,
            "focusin": function () {
                $(this).val("")
            }
        })
        // $("#subtractQuiz").append(inputDescription)
        secContainer.append(inputDescription)
        // console.log(secContainer)
        $("#subtractQuiz").append(secContainer)

    }
}
const evaluate = () => {
     clearInterval(timerObj);
    // console.log("In CLICK");
    let score = 0;
    let wrong = 0;
    let missed = 0;
    $('input[name^="name-"]').each(function () {
        //code
        //   console.log($(this).attr('name'));
        let userValue = $(this).val();
        let correctAns = $(this).attr("data-value");
        
        if (userValue == correctAns) {
            $(this).removeClass("wrong")
            $(this).addClass("correct")
            score++;
            $("h6[name='score']").text(`Score : ${score}`)
        } else if (!userValue) {

            missed++;
            $(this).addClass("wrong")
            $(this).removeClass("correct")
        } else {
            wrong++
            $(this).addClass("wrong")
            $(this).removeClass("correct")
        }

        $(this).prop("readonly", true)
    
    let subtractionScore = {
        right: score,
        wrong: wrong,
        time: 90-timerCount,
        missed:missed,
        date:new Date()
    }
    let subtractionLS = JSON.parse(localStorage.getItem("subtractionlist")) || []
    subtractionLS.push(subtractionScore)
    localStorage.setItem("subtractionlist", JSON.stringify(subtractionLS))
    console.log(subtractionLS,"Sub")
})
}
const startTimer = () => {

    timerObj = setInterval(() => {
        $('h6[name="timer"]').text(`Timer : ${timerCount}`)
        if (timerCount > 0) {
            timerCount--;
        } else {
            evaluate()
        }
    }, 1000)
}

$("#start-quiz").on("click", function () {
    renderQuestions();
    startTimer()
    $("#start-quiz").hide();
    $("#submitAnswers").show()
})

$("#submitAnswers").click(evaluate)
