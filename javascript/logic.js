//set global element variables to use and manipulate in this file and questions object array

let quiz_box_id = document.querySelector("#quiz-box");
let timer_el = document.querySelector("#timer");
let start_button = document.querySelector("#start");
let question_block_id = document.querySelector("#question-block");
let question_id = document.getElementById("#question");
let answer_list = document.getElementById("answer-choices");
let time_left = 75;
let interval;







//declare functions to write into the html file to display questions and answers
//make each answer option a button
//declare a generate  question function
function generateQuestion(){
    quiz_box_id.setAttribute("style", "display: none");
    question_block_id.setAttribute("style", "display: block");

    for(let i = 0; i < questions[i].choices.length; i++){
        let li = document.createElement("li");
        li.textContent = questions[i].choices[i];
        answer_list.appendChild(li);
    }


}


//declare a clearhtml function

function startQuiz(){
    interval = setInterval(countdown, 1000);
    timer_el.setAttribute("style", "display: block");
}

//countdown function
function countdown(){
    timer_el.textContent = "Time left: " + time_left;
    time_left--;

    if(time_left === 0){
        timer_el.textContent = "";
        clearInterval(interval);
    }
}
/*
maybe make question block in html(just layout) and fill values with the properties of questions array, or look into how to rewrite html blocks from java script
*/


//add event listeners to all buttons
start_button.addEventListener("click", startQuiz);
start_button.addEventListener("click", generateQuestion);
