const cat = document.querySelector(".cat");
const heart = document.querySelector(".heart");
const counter = document.querySelector(".counter");
const broom = document.querySelector(".broom");

let countCatPetted = 0;

function showHeart() {
    heart.style.display = "block";
    miau();
    countCatPetted++;
    updateCountCatPetted();
}

function hideHeart(e) {
    e.stopPropagation();
    heart.style.display = "none";
}

function updateCountCatPetted() {
    counter.textContent = countCatPetted;
}

function miau() {
    new Audio("cat-purring-and-meow.mp3").play();
}

let delta = 10;
function sweep() {
    const rect = broom.getBoundingClientRect();
    broom.style.left = `${rect.left - delta}px`
    delta = -delta;
}

broom.addEventListener("click", sweep);

updateCountCatPetted();

cat.addEventListener("click", showHeart);
heart.addEventListener("click", hideHeart);