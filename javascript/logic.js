//set global element variables to use and manipulate in this file and questions object array

let quiz_box_id = document.querySelector("#quiz-box");
let timer_el = document.querySelector("#quiz-timer");
let question_timer = document.querySelector("#question-timer");
let start_button = document.querySelector("#start");
let question_block_id = document.querySelector("#question-block");
let question_id = document.querySelector("#question");
let answer_list = document.querySelector("#answer-choices");
let choice_one = document.querySelector("#choice1");
let choice_two = document.querySelector("#choice2");
let choice_three = document.querySelector("#choice3");
let choice_four = document.querySelector("#choice4");
let time_left = 75;
let question_time = 15;
let interval;
let i = 0;
let print_question;






//declare functions to write into the html file to display questions and answers
//make each answer option a button
//declare a generate  question function
function generateQuestion(){
    quiz_box_id.setAttribute("style", "display: none");
    question_block_id.setAttribute("style", "display: block");
    startQuiz();
    
    print_question = setInterval(displayQuestion, 15000);
   


}

function displayQuestion(){
    question_timer.setAttribute("style", "display: block");
    if(questions[i] === undefined){
        clearInterval(print_question);
    }
    else{
        question_id.textContent = questions[i].question;
        choice_one.textContent = "A: " + questions[i].choices[0];
        choice_two.textContent = "B: " + questions[i].choices[1];
        choice_three.textContent = "C: " + questions[i].choices[2];
        choice_four.textContent = "D: " + questions[i].choices[3];

    }
    
    i++;
}


//declare a clearhtml function

function startQuiz(){
    interval = setInterval(countdown, 1000);
    timer_el.setAttribute("style", "display: block");
    displayQuestion();
}

//countdown function
function countdown(){
    timer_el.textContent = "Time left: " + time_left;
    question_timer.textContent = "Question: " + question_time;
    question_time--;
    time_left--;

    if(time_left === 0){
        timer_el.textContent = "";
        clearInterval(interval);
    }
    if(question_time === 0){
        question_time = 15;
    }
}
/*
maybe make question block in html(just layout) and fill values with the properties of questions array, or look into how to rewrite html blocks from java script
*/


//add event listeners to all buttons
// start_button.addEventListener("click", startQuiz);
start_button.addEventListener("click", generateQuestion);
