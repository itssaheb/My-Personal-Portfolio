let light = document.getElementById('darkLight');
let visualMode = document.getElementById("Mode");
light.addEventListener('click',()=>{
    if(light.style.justifyContent === "start")
    {
        light.style.justifyContent="end";
        visualMode.classList.remove("fa-moon");
        visualMode.classList.add("fa-sun");
    }
    else
    {
        light.style.justifyContent="start";
        visualMode.classList.remove("fa-sun");
        visualMode.classList.add("fa-moon");
    }
});
