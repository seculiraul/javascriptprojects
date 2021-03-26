'use strict';


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");
console.log(btnOpen);




const closeFct = () => {

    modal.classList.add("hidden");
    overlay.classList.add("hidden");


}

for(let i = 0; i <  btnOpen.length; i++) {
btnOpen[i].addEventListener("click", function() {



console.log("Button clicked");
modal.classList.remove("hidden");
overlay.classList.remove("hidden");



});



btnClose.addEventListener("click", closeFct);

}

overlay.addEventListener("click", closeFct);

document.addEventListener("keydown", function(e) {

if(e.key ==="Escape" && !modal.classList.contains("hidden"))
    closeFct();




});