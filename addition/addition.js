console.log("Additon time facts", questions)
let right=0;
let wrong=0;
let currentScore = 0;

$("article[name^='question-display'").hide()
questions = questions.sort(() => Math.random() - 0.5);
let displayQuestionIndex = 0;

const renderElements = () => {
    const section = $("section")
    const h4 = $("h4")
    h4.addClass("text-center");
    h4.attr("id", "questionDisplay")
    const form = $("form")
    const input = $("input")
    form.append(input)
    form.submit(acceptUserEntry);
    section.append(h4)
    section.append(form)
    console.log(section)
    $("article[name^='question-display'").append(section);
    renderQuestions()
}


$("#start-quiz").on("click", function () {
    $(this).hide()
    $("article[name^='question-display'").show()
    renderElements()
})

const renderQuestions = () => {
    console.log("Questions --")
  $("#questionDisplay").text(questions[displayQuestionIndex].question)

}

const acceptUserEntry = (event) => {
    event.preventDefault()
    let userInput = $(this).val()
  if(userInput === questions[displayQuestionIndex].choices[answer]){
      currentScore++;
      right++;
      this.addClass("right")
      $("p[name='score']").text(`Score :${currentScore}`)

  }else{
    wrong++;
    this.addClass("wrong")
  }
  setTimeout(function(){
      this.removeClass("right");
      this.removeClass("wrong");
      if(displayQuestionIndex<questions.length-1){
        displayQuestionIndex++;
        renderQuestions();
    }else{
        console.log(right,wrong)
    }
  },5000)
 
}

