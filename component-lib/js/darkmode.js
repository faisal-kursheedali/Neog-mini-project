const darkMode=document.querySelectorAll(".dark-mode");
darkMode.forEach(darkMode=>{
    darkMode.addEventListener("click",()=>{
        if (darkMode.innerText==="dark_mode") {
            document.body.style.color="var(--white-txt)";
            document.body.style.backgroundColor="var(--dark-bg)";
            darkMode.innerText="light_mode";
            darkMode.style.color="var(--cta2)";
            
        }else{
            document.body.style.color="var(--dark-txt)";
            document.body.style.backgroundColor="white";
            darkMode.innerText="dark_mode";
            darkMode.style.color="initial";
            
        }
        
    })
})
