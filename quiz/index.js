const questionArr = ["What Indian city is the capital of two states?", "How many countries border India?", "What is the capital of Gujarat?", "What is India's smallest state by area", "In what state is Bengaluru located?"]
const optionArr = [
    ["Chennai", "Mumbai", "Chandigar", "Kolkata"],
    [9, 4, 3, 6],
    ["Lucknow", "Bhopal", "Gandhinagar", "Mumbai"],
    ["Goa", "Kerala", "Uttar Pradesh", "Puducherry"],
    ["Bihar", "Kerala", "Karnataka", "Chattisgarh"]
]
const crtAns = ["Chandigar", "6", "Gandhinagar", "Goa", "Karnataka"]
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
let score=0;
let count=0;
let userAns=[],crtItm;
let questionNO;

// this run when user click stat
quizStart.addEventListener("click", () => {
    quizWelcome.style.display = "none";
    quizBox.style.display = "block";
    totalQ.innerText = questionArr.length;
})

const countChecker = () => {
    if (count === questionArr.length && count === 0) {
        return (false)
    } else {
        return (true)
    }
}
const ansDisplay=(itm,crtItm)=>{
    value=itm.innerText;
    if (value===crtAns[count]) {
        itm.style.backgroundColor="var(--green-bg)";
        // score=score+1;
        // currentScore.innerText=score;
        return(true)
    }else{
        itm.style.backgroundColor="var(--red-bg)";
        crtItm.style.backgroundColor="var(--green-bg)";
        setTimeout(() => {
            crtItm.style.backgroundColor="initial"; 
        },2500);
        return(false)
    }
}
// userAns.forEach(item=>{
//     console.log(item);
//     let crtItm=userAns.forEach(itm=>findingCrtitm(itm));
//     console.log(crtItm);
//     item.addEventListener("click",ansDisplay(item,crtItm));
// })
// const displayCrtAns=()=>{
//     optionArr.forEach(itm=)
// }
// const findingCrtitm=(itm)=>{
//     userAns.forEach(itm=>{
//         if (itm.innerText===crtAns[count]) {
//             return(itm);
//         }
//     })
    
    
// }
const displayQuestion=(count)=>{
    questionNO=count+1;
    currentQ.innerText=questionNO;
    quizQuestion.innerText = questionArr[count];
        optionArr[count].forEach(item => quizInput.innerHTML += `<label class="user-ans">${item}</label>`);
        userAnsNode=document.querySelectorAll(".user-ans");
        userAns=[];
        userAns=[...userAnsNode];
        console.log(userAns);
}
const scoreIncrement=()=>{
    score=score+1;
    currentScore.innerText=score;
}
const answerChecker=(input,userAns)=>{
    for (const item of userAns) {
        console.log(item);
        crtItm=item;
        console.log(crtItm);
        if (item.innerText===crtAns[count]) {
            break;
        }
    }
    return(ansDisplay(input,crtItm))
}
const next = () => {
    quizQuestion.innerHTML = null;
    quizInput.innerHTML = null;
    if (count===questionArr.length-1) {
        count=questionArr.length-1;
        displayQuestion(count);
    }else{
        displayQuestion(count);
        count = count + 1;
        
    }
}
const back = () => {
    quizQuestion.innerHTML = null;
    quizInput.innerHTML = null;
    if (count===0) {
        count=0;
        displayQuestion(count);
        
    }else{
        quizQuestion.innerHTML = "";
        quizInput.innerHTML = "";
        count = count - 1;
       displayQuestion(count);
        
    }

}
quizNext.addEventListener("click",()=>{
    next();
    userAns.forEach(item=>{
        console.log(item);
        item.addEventListener("click",()=>{
        item.style.pointerEvents="none";
           let increment= answerChecker(item,userAns)
           console.log(increment);
           increment?score=score+1:"";
           currentScore.innerText=score;
        })
        
    })
});
quizBack.addEventListener("click",()=>{
    back();
    userAns.forEach(item=>{
        console.log(item);
        item.addEventListener("click",()=>{
            item.style.pointerEvents="none";
            answerChecker(item,userAns);
        })
    })
})

































// let count=0;
// let score=0;
// let crtOption;

// // when clicked next this function runs
// quizNext.addEventListener("click",()=>{
//     currentQ.innerText=count;

//     if (count===questionArr.length) {
//         return('')
//     }else{

//         console.log(currentScore);
//         console.log(count);
//         quizInput.innerHTML=``;

//         quizQuestion.innerText=questionArr[count];
//         let div=document.createElement("div")
//         optionArr[count].forEach(item=>{
//             let label=document.createElement("label")
//             label.innerHTML=`${item}`
//             console.log(label);
//             div.appendChild(label);
//             console.log(div);
//         })
//         quizInput.appendChild(div);
//         const usrAns=document.querySelectorAll(".input-box div label");
//         usrAns.forEach((itm,id)=>{
//             console.log(itm);
//             if(itm.innerText===crtAns[count]){
//                     crtOption=itm;
//                 }
//             itm.addEventListener("click",()=>{

//                 console.log(itm.innerText);
//                 console.log(crtAns[count]);
//                 console.log(count);

//                 if (itm.innerText===crtAns[count]) {

//                     score=score+1
//                     currentScore.innerText=score;
//                     itm.style.backgroundColor="var(--green-bg)";

//                 }
//                 else{
//                     itm.style.backgroundColor="var(--red-bg)";
//                     crtOption.style.backgroundColor="var(--green-bg)";
//                     setTimeout(() => {
//                         crtOption.style.backgroundColor="inherit";
//                     }, 2000);

//                 }
//                 usrAns.forEach((itm,id)=>{
//                     itm.style.pointerEvents="none";
//                 })
//             })   
//         })


//     }
//     count=count+1;
//     console.log(score);
// })

// // this function run when user click back btn
// quizBack.addEventListener("click",()=>{
//     if (count===0) {
//         return('')
//     }else{
//         count=count-1;
//         quizInput.innerHTML=``;
//         currentQ.innerText=count;

//         let div=document.createElement("div")
//         optionArr[count].forEach(item=>{
//             let label=document.createElement("label");
//             label.className ="user-ans";
//             label.innerHTML=`${item}`
//             console.log(label);
//             div.appendChild(label);
//             console.log(div);
//         })
//         quizInput.appendChild(div)
//         const usrAns=document.querySelectorAll(".input-box div label");
//         usrAns.forEach((itm,id)=>{
//             console.log(itm);
//             if(itm.innerText===crtAns[count]){
//                     crtOption=itm;
//                 }
//             itm.addEventListener("click",()=>{

//                 console.log(itm);

//                 if (itm.innerText===crtAns[count]) {
//                     console.log(itm);

//                     itm.style.backgroundColor="var(--green-bg)";
//                 }
//                 else{
//                     itm.style.backgroundColor="var(--red-bg)";
//                     crtOption.style.backgroundColor="var(--green-bg)";
//                     setTimeout(() => {
//                         // itm.style.backgroundColor="inherit";
//                         crtOption.style.backgroundColor="inherit";
//                     }, 1000);

//                 }
//                 usrAns.forEach((itm,id)=>{
//                     itm.style.pointerEvents="none";
//                 })
//             })   
//         })

//     }

// })