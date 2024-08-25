var main = document.querySelector("main");
var loader = document.querySelector(".loader");
var tikla = document.querySelector("#tikla");
var video = document.querySelector("video");
var filtre = document.querySelector(".filtre");
var portfolio = document.querySelector(".portfolio");
var current = null;

function randomVideo() {
    let next;
    do {
        next = Math.floor(Math.random() * 2);
    } while (next === current);
    
    current = next;
    video.src = current === 0 ? "assets/dalisitebg.mp4" : "assets/tok.mp4";
}

window.addEventListener("DOMContentLoaded", () => {
    randomVideo();
    main.style.display = "flex";
    loader.style.display = "none";
});

tikla.addEventListener("click", () => {
    filtre.style.display = "none";
    tikla.style.display = "none";
    
    video.play();
    portfolio.style.display = "flex";
});

video.addEventListener("ended", () => {
    randomVideo();
    video.play();
});
