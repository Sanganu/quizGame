//console.log("Additon time facts", questions)
let right = 0;
let wrong = 0;
let currentScore = 0;

$("article[name='question-display'").hide()
//questions = questions.sort(() => Math.random() - 0.5);
let displayQuestionIndex = 0;

const renderElements = () => {
    const section = $("<section>")
    const h4 = $("<h4>")
  
    h4.addClass("text-center");
    h4.attr("id","questionDisplay")
    h4.text("Question")

    const form = $("<form>")
    const div1= $("<div>")
    const option1= $('<input>')
    option1.attr("type","radio")
    
    const label1 = $("<label>")
    const div2= $("<div>")
    const option2= $('<input>')
    const label2 = $("<label>")
    option2.attr("type","radio")
    const div3= $("<div>")
    const option3= $('<input>')
    const label3 = $("<label>")
    option3.attr("type","radio")
    const div4= $("<div>")
    const option4= $('<input>')
    const label4 = $("<label>")
    option4.attr("type","radio")
   
    option1.attr("name","answer")
    option2.attr("name","answer")
    option3.attr("name","answer")
    option4.attr("name","answer")

 

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
   

    form.on("submit",acceptUserEntry);

  
    $("article[name='question-display'").show()
    $("article[name='question-display'").append(form);
    renderQuestions()
}


$("#start-quiz").on("click", function () {
    $(this).hide()
    $("article[name='question-section").show()
    renderElements()
})

const renderQuestions = () => {
    console.log("Questions --",questions[displayQuestionIndex])
    $("#questionDisplay").text(questions[displayQuestionIndex].question)
    let i =0
    $("input[name='answer']").each(function(index,value){
        $(this).attr("value",questions[displayQuestionIndex].choices[i])
        $(this).siblings("label").text(questions[displayQuestionIndex].choices[i])
        i++
    })
}

const acceptUserEntry = (event) => {
    event.preventDefault()
    let userInput = $(this).val()
    console.log(userInput,"ans")
    if (userInput === questions[displayQuestionIndex].choices[answer]) {
        currentScore++;
        right++;
        this.addClass("right")
        $("p[name='score']").text(`Score :${currentScore}`)

    } else {
        wrong++;
        this.addClass("wrong")
    }
}
    setTimeout(function () {
    
        if (displayQuestionIndex < questions.length - 1) {
            displayQuestionIndex++;
           // renderQuestions();
        } else {
            console.log(right, wrong)
        }
    }, 5000)



