var quiz = [
    {
        question: "/kill",
        options: [
            "kills self",
            "kills the mob in front of you",
            "kills selected entity",
            "mutes player in chat"
        ],
        answer: 2
    },
    {
        question: "/locate",
        options: [
            "teleports player to a stronghold",
            "locates selected structure",
            "saves current coordinates",
            "locates other players"
        ],
        answer: 1
    },
    {
        question: "/tp",
        options: [
            "teleports player to closest structure",
            "see codes for Minecraft",
            "DM specific players",
            "teleports player"
        ],
        answer: 3
    },
    {
        question: "/gamemode",
        options: [
            "shows current gamemode",
            "changes gamemode",
            "changes gamemode to spectator mode",
            "makes you operator"
        ],
        answer: 1
    }
];

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var resultPopup = document.getElementById("resultPopup");
var quizidx = -1;
var score = 0;
var popup = document.getElementById("popup");

function nextQuiz(){
    quizidx += 1;
    if(quizidx >= quiz.length){
        printResult();
        return;
    }
    question.innerHTML = quiz[quizidx].question;
    option1.innerHTML = quiz[quizidx].options[0];
    option2.innerHTML = quiz[quizidx].options[1];
    option3.innerHTML = quiz[quizidx].options[2];
    option4.innerHTML = quiz[quizidx].options[3];
}

function selectOption(optionnum){
    if(optionnum == quiz[quizidx].answer){
        score += 1;
    }
    console.log(score);
    nextQuiz();
}

function printResult(){
    popup.classList.add("visible");
    resultPopup.innerHTML = Math.floor(100 / quiz.length * score);
}
function restartQuiz(){
    location.reload();
}
function mainMenu(){
    location.href = "./index.html";
}




//
nextQuiz();