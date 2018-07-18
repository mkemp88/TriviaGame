
var correct = 0;
var wrong = 0;
var timeOut = setTimeout(timesUp,90000);
var timeleft = 90;

var questions = ["#question1", "#question2", "#question3", "#question4", "#question5", "#question6", "#question7", "#question8"]



function answerCheck(){


$("#submitButton").on('click', function(event){
    var radioVal1 = $("#question1 input[type='radio']:checked").val();
    console.log(radioVal1);
    if(radioVal1 === "Isla Nublar"){
        correct++;
    }else{
        wrong++;
    };

    var radioVal2 = $("#question2 input[type='radio']:checked").val();
    console.log(radioVal2);
    if(radioVal2 === "A flea circus"){
        correct++
    }else{
        wrong++;
    };

    var radioVal3 = $("#question3 input[type='radio']:checked").val();
    console.log(radioVal3);
    if(radioVal3 === "Mathemetician"){
        correct++
    }else{
        wrong++;
    };

    var radioVal4 = $("#question4 input[type='radio']:checked").val();
    console.log(radioVal4);
    if(radioVal4 === "Gallimimus"){
        correct++
    }else{
        wrong++;
    };

    var radioVal5 = $("#question5 input[type='radio']:checked").val();
    console.log(radioVal5);
    if(radioVal5 === "A hurricane"){
        correct++
    }else{
        wrong++;
    };

    var radioVal6 = $("#question6 input[type='radio']:checked").val();
    console.log(radioVal6);
    if(radioVal6 === "15 minutes"){
        correct++
    }else{
        wrong++;
    };

    var radioVal7 = $("#question7 input[type='radio']:checked").val();
    console.log(radioVal7);
    if(radioVal7 === "Whale"){
        correct++
    }else{
        wrong++;
    };

    var radioVal8 = $("#question8 input[type='radio']:checked").val();
    console.log(radioVal8);
    if(radioVal8 === "Titanic"){
        correct++
    }else{
        wrong++;
    };

    alert("Answers Correct: " + correct + "\n" + "Answers Wrong: " + wrong)

    console.log(correct);
    console.log(wrong);

    clearTimeout(timeOut);
});

};

function timesUp(){
    var radioVal1 = $("#question1 input[type='radio']:checked").val();
    console.log(radioVal1);
    if(radioVal1 === "Isla Nublar"){
        correct++;
    }else{
        wrong++;
    };

    var radioVal2 = $("#question2 input[type='radio']:checked").val();
    console.log(radioVal2);
    if(radioVal2 === "A flea circus"){
        correct++
    }else{
        wrong++;
    };

    var radioVal3 = $("#question3 input[type='radio']:checked").val();
    console.log(radioVal3);
    if(radioVal3 === "Mathemetician"){
        correct++
    }else{
        wrong++;
    };

    var radioVal4 = $("#question4 input[type='radio']:checked").val();
    console.log(radioVal4);
    if(radioVal4 === "Gallimimus"){
        correct++
    }else{
        wrong++;
    };

    var radioVal5 = $("#question5 input[type='radio']:checked").val();
    console.log(radioVal5);
    if(radioVal5 === "A hurricane"){
        correct++
    }else{
        wrong++;
    };

    var radioVal6 = $("#question6 input[type='radio']:checked").val();
    console.log(radioVal6);
    if(radioVal6 === "15 minutes"){
        correct++
    }else{
        wrong++;
    };

    var radioVal7 = $("#question7 input[type='radio']:checked").val();
    console.log(radioVal7);
    if(radioVal7 === "Whale"){
        correct++
    }else{
        wrong++;
    };

    var radioVal8 = $("#question8 input[type='radio']:checked").val();
    console.log(radioVal8);
    if(radioVal8 === "Titanic"){
        correct++
    }else{
        wrong++;
    };

    alert("Answers Correct: " + correct + "\n" + "Answers Wrong: " + wrong)

    console.log(correct);
    console.log(wrong);

}




function countDown(){
   timeleft--;
   if(timeleft > 0){
      setTimeout(countDown,1000);
   }else{
       clearTimeout(countDown);
   }
   $("#timer").text(timeleft);
   console.log(timeleft);
}
countDown()




answerCheck();



//if else statements for the final check fo the answers
//on click event for the done button at the bottom
//same functionality for when the time runs out
//