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

var slide = document.getElementById("slider");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
btn1.onclick = function(){
    slide.style.transform = "translateX(0px)";
    btn1.classList.add("active");
    btn2.classList.remove("active");
}
btn2.onclick = function(){
    slide.style.transform = "translateX(-100%)";
    btn2.classList.add("active");
    btn1.classList.remove("active");
}


