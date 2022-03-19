console.log("Subtraction", questions)
$("#submitAnswers").hide()

const renderQuestions = () => {
       for(let i=0;i<questions.length;i++){
            let secContainer = $(`<div>`,{
                class:"inputCont"
            })
           
            let labelDesc = $('<label>',{
                "text": `Q: ${questions[i].question}`,
                "for":`name-${i}`,
               
            })
            console.log(labelDesc)
            // $("#subtractQuiz").append(labelDesc)
            secContainer.append(labelDesc)
            let inputDescription =$('<input>',{
                "class":'subtractionQs',
                "name":`name-${i}`,
                "type":"number",
                "min":0,
                "max":120,
                "placeholder":questions[i].question,
                "data-value":questions[i].answer,
                "focusin": function(){
                    $(this).val("")
                }
            })
            // $("#subtractQuiz").append(inputDescription)
            secContainer.append(inputDescription)
            console.log(secContainer)
        $("#subtractQuiz").append(secContainer)

       }
}

const startTimer =() => {
    let timerObj = setInterval(()=>{

    },1000)
}

$("#start-quiz").on("click", function() {
        renderQuestions()
        $("#start-quiz").hide();
        $("#submitAnswers").show()
 })

$("#submitAnswers").click(function () {
    console.log("In CLICK");
    let score =0;
    $('input[name^="name-"]').each(function(){
        //code
      console.log($(this).attr('name'));
      let userValue = $(this).val();
      let correctAns = $(this).attr("data-value");
      if(userValue == correctAns){
          $(this).addClass("correct")
        score++;
      }else{
        $(this).addClass("wrong")
      }
});
})
