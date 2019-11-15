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
let answer_message = document.querySelector("#answer-message");
let submit_highscore = document.querySelector("#submit-highscore");
let highscore_message = document.querySelector("#highscore-message");
let view_highscores = document.querySelector("#view-highscores");
let highscore_initials = document.querySelector("#highscore-initials");
let highscore_list = document.querySelector("#highscore-list");
let time_left = 75;

let interval;
let i = 0;
let print_question;
let correct_answers = 0;
let incorrect_answers = 0;
let score = 0;
let highscore = 0;
let highscore_holders = [];






//declare functions to write into the html file to display questions and answers
//make each answer option a button
//declare a generate  question function
function generateQuestion(){
    quiz_box_id.setAttribute("style", "display: none");
    question_block_id.setAttribute("style", "display: block");
    startQuiz();

}

function displayQuestion(){
   
    if(questions[i] === undefined){
        clearInterval(print_question);
    }
    else{
        question_id.textContent = questions[i].question;
        choice_one.textContent =  questions[i].choices[0];
        choice_two.textContent = questions[i].choices[1];
        choice_three.textContent = questions[i].choices[2];
        choice_four.textContent = questions[i].choices[3];

    }
    
    
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
    
    time_left--;

    if(time_left === 0){
        timer_el.textContent = "";
        clearInterval(interval);
    }
  
}

function answerQuestion(){
    let target = event.target;
    console.log(target);
    console.log(target.textContent);
    console.log(questions[i].answer);
   
        //check the answer clicked with the correct answer(maybe try to give data tags and compare ids?) also think about instead of using setinterval, just recall generate function on button click, after comparing the clicked answer to the correct one
        if(target.textContent === questions[i].answer){
            // clearInterval(print_question);
            correct_answers++;
            i++;
            answer_message.setAttribute("style", "color: lime");
            answer_message.textContent = "Correct!";
            displayQuestion();

        }else{
            time_left -= 15;
            incorrect_answers++;
            i++;
            answer_message.setAttribute("style", "color: red");            answer_message.textContent = "Incorrect!";
            displayQuestion();
        }
        if( i === questions.length){
            clearInterval(interval);
            timer_el.textContent = "";
            score += time_left;
            answer_list.setAttribute("style", "display: none");
            // answer_message.setAttribute("style", "display: none");
            question_id.textContent = "You answered " + " " + correct_answers + " " + "out of " +  " " + questions.length + " " +  "correctly.";
            //add stuff here to keep a score and highscore variable
           newHighScore();
        }

        
    
}

function storeHighScores(){
    event.preventDefault();
    //need to think of a way to store the names and scores(objects possible) and then display them on a highscore page
    let name = highscore_initials.value;
    highscore_holders.push({name: name, high_score: score});
    localStorage.setItem("high-score", JSON.stringify(highscore_holders));
}

function displayHighScores(){
    let get_scores = JSON.parse(localStorage.getItem("high-score"));

    if(get_scores !== null){
        highscore_holders = get_scores;
    }
    for(let j = 0; j < highscore_holders.length; j++){
        let li = document.createElement("li");
        li.textContent = highscore_holders[j].name + highscore_holders[j].score;
        highscore_list.append(li);
    }

    window.location.href = "highscores.html";
    
}

function newHighScore(){
 
        highscore_message.setAttribute("style", "display: block");
        highscore_initials.setAttribute("style", "display: block");
        view_highscores.setAttribute("style", "display: block");

    }

/*
maybe make question block in html(just layout) and fill values with the properties of questions array, or look into how to rewrite html blocks from java script
*/


//add event listeners to all buttons
// start_button.addEventListener("click", startQuiz);

start_button.addEventListener("click", generateQuestion);
choice_one.addEventListener("click", answerQuestion);
choice_two.addEventListener("click", answerQuestion);
choice_three.addEventListener("click", answerQuestion);
choice_four.addEventListener("click", answerQuestion);
submit_highscore.addEventListener("submit", storeHighScores);
view_highscores.addEventListener("click", displayHighScores);
