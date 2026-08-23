const btn=document.getElementById("btn");
const menu=document.querySelector("#menu ul");
btn.addEventListener("click",function(){
    menu.classList.toggle("hidden");
})