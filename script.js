//Gør at der kommer tydligere fejlkoder i konsollen 
"use strict";

let num;

window.addEventListener("load", start);
document.querySelector("#lower-button").addEventListener("click", function () {
    lower();
});
document.querySelector("#higher-button").addEventListener("click", function () {
    higher();
});
document.querySelector("#correct-button").addEventListener("click", function () {
    correct();
});


function start() {
    console.log("JavaScript is running");
    num = generateRandomNumber();
    const list = document.querySelector("#guess-list");
    const html = `<li>I guess ${num} - Is that lower, higher or correct</li>`
    list.insertAdjacentHTML("beforeend", html)
}

function generateRandomNumber(){
    return Math.floor(Math.random()*100);
}

function lower() {
    --num;
    const list = document.querySelector("#guess-list");
    const html = `<li>I will guess ${num} - Is that lower, higher or correct</li>`
    list.insertAdjacentHTML("beforeend", html)
}

function higher() {
    ++num;
    const list = document.querySelector("#guess-list");
    const html = `<li>I will guess ${num} - Is that lower, higher or correct</li>`
    list.insertAdjacentHTML("beforeend", html)
}

function correct() {
    const list = document.querySelector("#guess-list");
    const html = `<li>I guessed it ${num} - Now i can stop!</li>`
    list.insertAdjacentHTML("beforeend", html)

    document.querySelector("#lower-button").remove();
    document.querySelector("#higher-button").remove();
    document.querySelector("#correct-button").remove();
}