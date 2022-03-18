console.log("Subtraction", questions)




    var renderQuestions = () => {
    
     

       for(let i=0;i<questions.length;i++){
        let inputDescription =$('<input>',{
            class:'subtractionQs',
            name:'name-'+i,
            "type":"number",
            "min":0,
            "max":120,
            "placeholder":questions[i].question,
            "data-value":questions[i].answer,
            "focusin": function(){
                $(this).val("")
            }
        }   )
        $("#subtractQuiz").append(inputDescription)
        //$(inputDescription).appendTo("#subtractQuiz")
       }
       
        // for (let i = 0; i < questions.length; i++) {
        //     // let newlabelEle = labelEle.clone()
        //     let newinputEle = inputEle.clone()
        //     // newlabelEle.text(questions[i].question)
        //     newinputEle.attr("placeholder", questions[i].question)
        //     newinputEle.attr("name", `question-${i}`)
        //     newinputEle.attr("data-value", questions[i].answer)
        //     // newlabelEle.appendTo("#subtractionQuestions")
        //     newinputEle.appendTo("#subtractionQuestions")
        //     console.log(i)
        //     //   $("#subtractQuiz").append(`<input type="number" placeholder="${questions[i].question}" data-value="${questions[i].answer}"/>`)
        // }

        // for (let i = 0; i < questions.length; i++) {
        //     let newlabelEle = $("label");
        //     let newinputEle =  $("input");
        //     newlabelEle.text(questions[i].question)
        //     newinputEle.attr("placeholder", questions[i].question)
        //     newinputEle.attr("name", questions[i].question)
        //     newinputEle.attr("data-value", questions[i].answer)
        //     console.log(newinputEle)
        //    $("#subtractionQuestions").append(newlabelEle)
        //    $("#subtractionQuestions").append(newinputEle)
        //     //   $("#subtractQuiz").append(`<input type="number" placeholder="${questions[i].question}" data-value="${questions[i].answer}"/>`)
        // }
        //    const buttonEle = $("button")
        //    buttonEle.text("Submit Answers");
        //   buttonEle.appendTo("#subtractionQuestions")

    }

$("#start-quiz").on("click", function() {
        renderQuestions()
        $("#start-quiz").hide()
    })

$("#subtractionQuestions button").click(function () {
    console.log("In CLICK")
})
