//console.log("Additon time facts", questions)
let right = 0;
let wrong = 0;
let currentScore = 0;
let p_score = $("h6[name='score']");
let p_timer = $("h6[name='timer']");
let sec_right = $("section[class='right-answer']")
let sec_wrong = $("section[class='wrong-answer']")
let timer_obj;
let timer_counter =0;
$("article[class='endquiz']").hide()
$("article[name='question-display'").hide()
//questions = questions.sort(() => Math.random() - 0.5);
let displayQuestionIndex = 0;

const renderElements = () => {
    const section = $("<section>")
    const h4 = $("<h4>")

    h4.addClass("text-center");
    h4.attr("id", "questionDisplay")
    h4.text("Question")

    const form = $("<form>")
    const div1 = $("<div>")
    const option1 = $('<input>')
    option1.attr("type", "radio")

    const label1 = $("<label>")
    const div2 = $("<div>")
    const option2 = $('<input>')
    const label2 = $("<label>")
    option2.attr("type", "radio")
    const div3 = $("<div>")
    const option3 = $('<input>')
    const label3 = $("<label>")
    option3.attr("type", "radio")
    const div4 = $("<div>")
    const option4 = $('<input>')
    const label4 = $("<label>")
    option4.attr("type", "radio")

    option1.attr("name", "answer")
    option2.attr("name", "answer")
    option3.attr("name", "answer")
    option4.attr("name", "answer")

    option1.attr("data-value",0)
    option2.attr("data-value",1)
    option3.attr("data-value",2)
    option4.attr("data-value",3)

    option1.on('change', acceptUserEntry)
    option2.on('change', acceptUserEntry)
    option3.on('change', acceptUserEntry)
    option4.on('change', acceptUserEntry)

    div1.append(option1)
    div2.append(option2)
    div3.append(option3)
    div4.append(option4)

    div1.append(label1)
    div2.append(label2)
    div3.append(label3)
    div4.append(label4)

    form.append(h4)
    form.append(div1)
    form.append(div2)
    form.append(div3)
    form.append(div4)

    form.append("<br/>")


    form.on("submit", acceptUserEntry);
    
    section.append(h4)
    section.append(form)
    section.addClass("question-disp")

    $("article[name='question-display'").show()
    $("article[name='question-display'").append(section);
    
    let ptag = $("<h5>")
    ptag.text("Correct Answer")
    sec_right.append(ptag)
    sec_right.append("<ul>")
    let ptag1 = $("<h5>")
    ptag1.text("Incorrect Answer")
    sec_wrong.append(ptag1)
    sec_wrong.append("<ul>")
    renderQuestions()
}


$("#start-quiz").on("click", function () {
    $(this).hide()
    $("article[name='question-section']").show()
    $("article[class='endquiz']").show()
    renderElements()
    timerSection()
})

const renderQuestions = () => {
    //console.log("Questions --", questions[displayQuestionIndex])
    $("#questionDisplay").text(`${questions[displayQuestionIndex].question}`)
    let i = 0
    $("input[name='answer']").each(function (index, value) {
        $(this).attr("value", questions[displayQuestionIndex].choices[i])
        $(this).siblings("label").text(questions[displayQuestionIndex].choices[i])
        i++
    })
}

function acceptUserEntry (event){
    event.preventDefault()
    let userInput = $(this).attr("data-value")
  ///////  console.log(userInput, "ans",  questions[displayQuestionIndex].answer)
    if (userInput == questions[displayQuestionIndex].answer) {
        currentScore++;
        right++;
        p_score.text(`Score: ${currentScore}`)
        let ptag = $("<li>")
        ptag.text(questions[displayQuestionIndex].question)
        sec_right.children("ul").append(ptag)

    } else {
        wrong++;
        let ptag = $("<li>")
        ptag.text(questions[displayQuestionIndex].question)
        sec_wrong.children("ul").append(ptag)
   }
    if (displayQuestionIndex < questions.length - 1) {
        displayQuestionIndex++;
        $(this).prop("checked",false)
        renderQuestions()
    } else {
        endQuiz()
    }
}




function timerSection(){
    timer_obj = setInterval(function(){
        p_timer.text(`Time taken: ${timer_counter}`)
        timer_counter++
    

    },1000)
    console.log(timer_obj)
}

function endQuiz(){
    clearInterval(timer_obj);
}

$("#end-quiz").on("click",function(){
    $("article[class='endquiz']").hide()
    $("article[name='question-display'").hide()
    clearInterval(timer_obj) 
})