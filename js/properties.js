const btn=document.getElementById("btn");
const menu=document.querySelector("#menu");
const applyFilter=document.getElementById("apply-filter");
const resetFilter=document.getElementById("reset-filter");
const propertytype = document.getElementById("propertytype");
const location1 = document.getElementById("location1");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const salerent = document.getElementById("sale-rent");
const bedrooms=document.getElementById("bedrooms");
const favbtn = document.querySelectorAll(".fav-btn");
btn.addEventListener("click",function(){
    menu.classList.toggle("hidden");
});
applyFilter.addEventListener("click", function () {
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
    if(salerent.parentElement.querySelector(".err-pt")){
        salerent.parentElement.querySelector(".err-pt").remove();
    }
    if (salerent.value === "") {
        salerent.style.border = "1px solid red";
        const error=document.createElement("p");
        error.textContent="Please select property type";
        error.classList.add("text-red-500","text-sm","err-pt");
        salerent.parentElement.append(error); 
    } else {
        salerent.style.border="1px solid #d1d5db";
        if(salerent.parentElement.querySelector(".err-pt")){
        salerent.parentElement.querySelector(".err-pt").remove();
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
    if(bedrooms.parentElement.querySelector(".err-pt")){
        bedrooms.parentElement.querySelector(".err-pt").remove();
    }
    if (bedrooms.value === "") {
        bedrooms.style.border = "1px solid red";
        const error=document.createElement("p");
        error.textContent="Please select property type";
        error.classList.add("text-red-500","text-sm","err-pt");
        bedrooms.parentElement.append(error); 
    } else {
        bedrooms.style.border="1px solid #d1d5db";
        if(bedrooms.parentElement.querySelector(".err-pt")){
        bedrooms.parentElement.querySelector(".err-pt").remove();
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
salerent.addEventListener("change",function(){
    if(salerent.value!==""){
        salerent.style.border="1px solid #d1d5db";
        const error = salerent.parentElement.querySelector(".err-pt");
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
bedrooms.addEventListener("change",function(){
    if(bedrooms.value!==""){
        bedrooms.style.border="1px solid #d1d5db";
        const error = bedrooms.parentElement.querySelector(".err-pt");
        if(error) error.remove();
    }
});
resetFilter.addEventListener("click",function(){
     propertytype.value = "";
     location1.value = "";
     minPrice.value = "";
     maxPrice.value = "";
     salerent.value = "";
     bedrooms.value = "";
     const propertyCards = document.querySelectorAll(".property-card");
    propertyCards.forEach(function (card) {
        card.classList.remove("hidden");
    });
});
favbtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const icon = btn.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");
            icon.classList.toggle("text-red-500");
        }
    });
});