const quizs=document.querySelectorAll(".card-sm");
quizs.forEach(card=>{
    card.addEventListener("click",()=>window.location=card.dataset.html)
})