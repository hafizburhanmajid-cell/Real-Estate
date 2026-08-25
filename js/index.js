const btn = document.getElementById("btn");
const menu = document.querySelector("#menu");
const search = document.getElementById("search");
const propertytype = document.getElementById("propertytype");
const location1 = document.getElementById("location1");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const favbtn=document.querySelectorAll(".fav-btn");
const subscribeEmail=document.getElementById("subscribeEmail");
const subscribeForm=document.getElementById("subscribeForm");
btn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});
search.addEventListener("click", function () {
      if(propertytype.parentElement.querySelector(".err-pt")){
        propertytype.parentElement.querySelector(".err-pt").remove();
    }
    if (propertytype.value === "") {
        propertytype.style.border = "1px solid red";
        const error=document.createElement("p");
        error.textContent="Please select property type";
        error.classList.add("text-red-500","text-sm","err-pt");
        propertytype.parentElement.append(error); 
    } else {
        propertytype.style.border="1px solid #d1d5db";
        if(propertytype.parentElement.querySelector(".err-pt")){
        propertytype.parentElement.querySelector(".err-pt").remove();
    }
    }
    if(location1.parentElement.querySelector(".err-pt")){
        location1.parentElement.querySelector(".err-pt").remove();
    }
    if (location1.value === "") {
        location1.style.border = "1px solid red";
        const error=document.createElement("p");
        error.textContent="Please select location";
        error.classList.add("text-red-500","text-sm","err-pt");
        location1.parentElement.append(error);
    } else {
        location1.style.border="1px solid #d1d5db";
        if(location1.parentElement.querySelector(".err-pt")){
        location1.parentElement.querySelector(".err-pt").remove();
    }
    }
    if(minPrice.parentElement.querySelector(".err-pt")){
        minPrice.parentElement.querySelector(".err-pt").remove();
    }
    if (minPrice.value === "") {
        minPrice.style.border = "1px solid red";
        const error=document.createElement("p");
        error.textContent="Please select minimum price";
        error.classList.add("text-red-500","text-sm","err-pt");
        minPrice.parentElement.append(error);
    } else {
       minPrice.style.border="1px solid #d1d5db";
        if(minPrice.parentElement.querySelector(".err-pt")){
        minPrice.parentElement.querySelector(".err-pt").remove();
    }
    }
    if(maxPrice.parentElement.querySelector(".err-pt")){
        maxPrice.parentElement.querySelector(".err-pt").remove();
    }
    if (maxPrice.value === "") {
        maxPrice.style.border = "1px solid red";
        const error=document.createElement("p");
        error.textContent="Please select maximum price";
        error.classList.add("text-red-500","text-sm","err-pt");
        maxPrice.parentElement.append(error);
    } else {
        maxPrice.style.border="1px solid #d1d5db";
        if(maxPrice.parentElement.querySelector(".err-pt")){
        maxPrice.parentElement.querySelector(".err-pt").remove();
    }
    }
});
propertytype.addEventListener("change",function(){
    if(propertytype.value!==""){
        propertytype.style.border="1px solid #d1d5db";
        const error = propertytype.parentElement.querySelector(".err-pt");
        if(error) error.remove();
    }
});
location1.addEventListener("change",function(){
    if(location1.value!==""){
        location1.style.border="1px solid #d1d5db";
        const error = location1.parentElement.querySelector(".err-pt");
        if(error) error.remove();
    }
});
minPrice.addEventListener("input",function(){
    if(minPrice.value!==""){
        minPrice.style.border="1px solid #d1d5db";
        const error = minPrice.parentElement.querySelector(".err-pt");
        if(error) error.remove();
    }
});
maxPrice.addEventListener("input",function(){
    if(maxPrice.value!==""){
        maxPrice.style.border="1px solid #d1d5db";
        const error = maxPrice.parentElement.querySelector(".err-pt");
        if(error) error.remove();
    }
});
favbtn.forEach(function(btn) {
    btn.addEventListener("click",function(){
        const icon=btn.querySelector("i");
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("text-red-500");
    })
});
subscribeForm.addEventListener("submit",function(event){
    event.preventDefault();
    const existerror=subscribeForm.parentElement.querySelector(".err-sub");
    if(existerror){
        existerror.remove();
    }
    const emailValue=subscribeEmail.value.trim();
    if(emailValue===""){
        subscribeEmail.style.border="1px solid red";
        const error=document.createElement("p");
        error.textContent="Please enter email";
        error.classList.add("text-red-500","text-sm","err-sub","w-full","ml-4");
        subscribeEmail.parentElement.append(error);
    } else if(!emailValue.includes("@") || !emailValue.includes(".")){
        subscribeEmail.style.border="1px solid red";
        const error = document.createElement("p");
        error.textContent = "Please enter a valid email address";
        error.classList.add("text-red-500", "text-sm", "err-sub","w-full","ml-4");
        subscribeEmail.parentElement.append(error);
    } else {
        subscribeEmail.style.border="none";
        subscribeForm.reset();
    }
});
subscribeEmail.addEventListener("input",function(){
    const emailValue=subscribeEmail.value.trim();
    if(emailValue!==""){
        subscribeEmail.style.border="none";
        const error=subscribeForm.parentElement.querySelector(".err-sub");
        if(error) error.remove();
    }
});