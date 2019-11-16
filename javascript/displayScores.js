let highscore_list = document.querySelector("#highscore-list");

let get_scores = JSON.parse(localStorage.getItem("high-score"));
console.log(get_scores);
if(get_scores === null){
    get_scores = [];
}


for(let j = 0; j < get_scores.length; j++){
    let li = document.createElement("li");
    li.textContent = "Initals: " + " " + get_scores[j].name + " " + "Score: " + " " + get_scores[j].high_score;
    console.log(li);
    highscore_list.prepend(li);
}

function redirect(){
    window.location.href = "index.html";
}
document.querySelector("#back").addEventListener("click", redirect);