const data = [{
        question: "What Indian city is the capital of two states?",
        option: ["Chennai", "Mumbai", "Chandigar", "Kolkata"],
        ans: "Chandigar"
    },
    {
        question: "How many countries border India?",
        option: ["9", "4", "3", "6"],
        ans: "6"
    },
    {
        question: "What is the capital of Gujarat?",
        option: ["Lucknow", "Bhopal", "Gandhinagar", "Mumbai"],
        ans: "Gandhinagar"
    },
    {
        question: "What is India's smallest state by area",
        option: ["Goa", "Kerala", "Uttar Pradesh", "Puducherry"],
        ans: "Goa"
    },
    {
        question: "In what state is Bengaluru located?",
        option: ["Bihar", "Kerala", "Karnataka", "Chattisgarh"],
        ans: "Karnataka"
    },
]
const quizQuestion = document.querySelector(".quiz-question");
const quizInput = document.querySelector(".input-box");
const quizBack = document.querySelector(".quiz-back-btn");
const quizNext = document.querySelector(".quiz-nxt-btn");
// const userAns = document.querySelectorAll(".input-box label");
const quizStart = document.querySelector(".quiz-btn-start");
const quizWelcome = document.querySelector(".quiz-welcome");
const quizBox = document.querySelector(".quiz-box");
const currentQ = document.querySelector(".current-ques");
const totalQ = document.querySelector(".total-ques");
const currentScore = document.querySelector(".current-score");
const resultBox = document.querySelector(".result-box");
const resultScore = document.querySelector("#result-score");
const resultCrtAns = document.querySelector(".result-crt-ans");
let score = 0;
let count = 0;
let check = false;
let userAns = [],
    crtItm;
let questionNO;
resultBox.style.display="none";
// this run when user click stat
quizStart.addEventListener("click", () => {
    quizWelcome.style.display = "none";
    quizBox.style.display = "block";
    totalQ.innerText = data.length;
})
const countDisplay=()=>{
    return currentQ.innerText=count+1;
}
countDisplay();
const display = () => {
    quizQuestion.innerText = data[count].question;
    quizInput.innerHTML = ""
    data[count].option.map((i) => {

        console.log(i);
        return quizInput.innerHTML = quizInput.innerHTML + `<label for=""><input type="radio" name="option" className='question-list-item' value=${i} id=""   class="options"/>${i}</label>`
    })
}




const answerChecker = () => {
    const option = document.querySelectorAll(".input-box input");
    option.forEach((i) => {
        i.addEventListener("change", (i) => {
            option.forEach((i) => i.disabled = true)
            
            i.target.style.pointerEvent = "none";
            console.log(i);
            if (i.target.value === data[count].ans) {
                if (score < data.length) {
                    score = score + 1
                    return (currentScore.innerText = score)
                }
            }
        })
    })
}
display();
answerChecker();

quizNext.addEventListener("click", () => {
    if (count + 1 !== data.length) {
        count = count + 1;
        countDisplay();
        display();
        answerChecker();
    }else{
        quizBox.style.display="none";
        resultBox.style.display="block";
        resultScore.innerText=score+`/${data.length}`;
        for (let i = 0; i < data.length; i++) {
            resultCrtAns.innerHTML=resultCrtAns.innerHTML+`<div >${i+1}, <span class="result-question">${data[i].question}<span/><div/>
            <div class="result-ans">Ans : ${data[i].ans}<div/>`   
        }
    }
})
quizBack.addEventListener("click", () => {
    if (count !== 0) {
        count = count - 1;
        countDisplay();
        display();
        answerChecker();
    }
})