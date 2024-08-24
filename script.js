var main = document.querySelector("main");
var loader = document.querySelector(".loader");
var tikla = document.querySelector("#tikla");
var video = document.querySelector("video");
var filtre = document.querySelector(".filtre");
var portfolio = document.querySelector(".portfolio");

window.addEventListener("DOMContentLoaded", ()=>{
    main.style.display = "flex";
    loader.style.display = "none";
});

tikla.addEventListener("click", ()=>{
    filtre.style.display = "none";
    tikla.style.display = "none";
    
    video.play();
    portfolio.style.display = "flex";
});