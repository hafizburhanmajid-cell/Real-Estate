const btn=document.getElementById("btn");
const menu=document.querySelector("#menu");
if (btn && menu) {
    btn.addEventListener("click", function () {
        menu.classList.toggle("hidden");
        const menuIcon=btn.querySelector("i");
        if(menuIcon){
            menuIcon.classList.toggle("fa-bars");
            menuIcon.classList.toggle("fa-xmark");
        }
        const isOpen=!menu.classList.contains("hidden");
        btn.setAttribute("aria-expanded",isOpen? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function(link){
        link.addEventListener("click",function(){
            if(!menu.classList.contains("hidden")){
               menu.classList.add("hidden");
               const menuIcon=btn.querySelector("i");
               if(menuIcon){
                  menuIcon.classList.remove("fa-xmark");
                  menuIcon.classList.add("fa-bars")
            }
            btn.setAttribute("aria-expanded","false");
         }
     });
  }); 
} 