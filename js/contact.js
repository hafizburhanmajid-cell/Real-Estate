const btn=document.getElementById("btn");
const menu=document.querySelector("#menu");
const contactForm = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
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
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let isValid = true; 
    if (nameInput.nextElementSibling && nameInput.nextElementSibling.classList.contains("err-msg")) {
        nameInput.nextElementSibling.remove();
    }
    if (nameInput.value.trim() === "") {
        nameInput.style.border = "1px solid red";
        const error = document.createElement("p");
        error.textContent = "Please enter your full name";
        error.classList.add("text-red-400", "text-xs", "err-msg");
        nameInput.after(error);
        isValid = false;
    } else {
        nameInput.style.border = "1px solid rgba(255, 255, 255, 0.25)";
        if (nameInput.nextElementSibling && nameInput.nextElementSibling.classList.contains("err-msg")) {
            nameInput.nextElementSibling.remove();
        }
    }
    if (emailInput.nextElementSibling && emailInput.nextElementSibling.classList.contains("err-msg")) {
        emailInput.nextElementSibling.remove();
    }
    if (emailInput.value.trim() === "") {
        emailInput.style.border = "1px solid red";
        const error = document.createElement("p");
        error.textContent = "Please enter your email";
        error.classList.add("text-red-400", "text-xs", "err-msg");
        emailInput.after(error);
        isValid = false;
    } else {
        emailInput.style.border = "1px solid rgba(255, 255, 255, 0.25)";
        if (emailInput.nextElementSibling && emailInput.nextElementSibling.classList.contains("err-msg")) {
            emailInput.nextElementSibling.remove();
        }
    }
    if (phoneInput.nextElementSibling && phoneInput.nextElementSibling.classList.contains("err-msg")) {
        phoneInput.nextElementSibling.remove();
    }
    if (phoneInput.value.trim() === "") {
        phoneInput.style.border = "1px solid red";
        const error = document.createElement("p");
        error.textContent = "Please enter your phone number";
        error.classList.add("text-red-400", "text-xs", "err-msg");
        phoneInput.after(error);
        isValid = false;
    } else {
        phoneInput.style.border = "1px solid rgba(255, 255, 255, 0.25)";
        if (phoneInput.nextElementSibling && phoneInput.nextElementSibling.classList.contains("err-msg")) {
            phoneInput.nextElementSibling.remove();
        }
    }
    if (subjectInput.nextElementSibling && subjectInput.nextElementSibling.classList.contains("err-msg")) {
        subjectInput.nextElementSibling.remove();
    }
    if (subjectInput.value.trim() === "") {
        subjectInput.style.border = "1px solid red";
        const error = document.createElement("p");
        error.textContent = "Please enter subject";
        error.classList.add("text-red-400", "text-xs", "err-msg");
        subjectInput.after(error);
        isValid = false;
    } else {
        subjectInput.style.border = "1px solid rgba(255, 255, 255, 0.25)";
        if (subjectInput.nextElementSibling && subjectInput.nextElementSibling.classList.contains("err-msg")) {
            subjectInput.nextElementSibling.remove();
        }
    }
    if (messageInput.nextElementSibling && messageInput.nextElementSibling.classList.contains("err-msg")) {
        messageInput.nextElementSibling.remove();
    }
    if (messageInput.value.trim() === "") {
        messageInput.style.border = "1px solid red";
        const error = document.createElement("p");
        error.textContent = "Please write your message";
        error.classList.add("text-red-400", "text-xs", "err-msg");
        messageInput.after(error);
        isValid = false;
    } else {
        messageInput.style.border = "1px solid rgba(255, 255, 255, 0.25)";
        if (messageInput.nextElementSibling && messageInput.nextElementSibling.classList.contains("err-msg")) {
            messageInput.nextElementSibling.remove();
        }
    }
    if (isValid) {
        contactForm.reset();
        location.reload();
    }
});
nameInput.addEventListener("input", function(){
    if(nameInput.value !== ""){
        nameInput.style.border = "1px solid rgba(255, 255, 255, 0.25)";
        if(nameInput.nextElementSibling && nameInput.nextElementSibling.classList.contains("err-msg")){
            nameInput.nextElementSibling.remove();
        }
    }
});
emailInput.addEventListener("input", function(){
    if(emailInput.value !== ""){
        emailInput.style.border = "1px solid rgba(255, 255, 255, 0.25)";
        if(emailInput.nextElementSibling && emailInput.nextElementSibling.classList.contains("err-msg")){
            emailInput.nextElementSibling.remove();
        }
    }
});
phoneInput.addEventListener("input", function(){
    if(phoneInput.value !== ""){
        phoneInput.style.border = "1px solid rgba(255, 255, 255, 0.25)";
        if(phoneInput.nextElementSibling && phoneInput.nextElementSibling.classList.contains("err-msg")){
            phoneInput.nextElementSibling.remove();
        }
    }
});
subjectInput.addEventListener("input", function(){
    if(subjectInput.value !== ""){
        subjectInput.style.border = "1px solid rgba(255, 255, 255, 0.25)";
        if(subjectInput.nextElementSibling && subjectInput.nextElementSibling.classList.contains("err-msg")){
            subjectInput.nextElementSibling.remove();
        }
    }
});
messageInput.addEventListener("input", function(){
    if(messageInput.value !== ""){
        messageInput.style.border = "1px solid rgba(255, 255, 255, 0.25)";
        if(messageInput.nextElementSibling && messageInput.nextElementSibling.classList.contains("err-msg")){
            messageInput.nextElementSibling.remove();
        }
    }
});