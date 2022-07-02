var quiz = [
    {
        question: "√25 = ?",
        options: [
            "10",
            "8",
            "5",
            "50"
        ],
        answer: 2
    },
    {
        question: "77 - x = 100",
        options: [
            "-23",
            "-33",
            "33",
            "59"
        ],
        answer: 0
    },
    {
        question: "4 + 78 = ?",
        options: [
            "87",
            "34",
            "82",
            "102"
        ],
        answer: 2
    },
    {
        question: "12 * 11 = ?",
        options: [
            "144",
            "132",
            "81",
            "121"
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