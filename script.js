// js fade in script

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content Loaded, fade")
    var fadeInElement = document.getElementById("fadeInElement");
    console.log("Fade Element grabbed.", fadeInElement);
    fadeInElement.classList.add("fade-in");
    console.log("Element Faded?", fadeInElement.classList);
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content loaded, slide")
    var slideDownElement = document.getElementById("slideDownElement");
    console.log("Slide element grabbed", slideDownElement);
    slideDownElement.classList.add("slide-down");
    console.log("Element slided?", slideDownElement.classList);
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content Loaded, transform")
    var translateElement = document.getElementById("translateElement");
    console.log("Translate grabbed", translateElement);
    translateElement.classList.add("trans-in");
    console.log("Element transformed?", translateElement.classList);
})

document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleButton");
    var hiddenElement = document.getElementById("hiddenElement");

    toggleButton.addEventListener("click", function () {
        if (hiddenElement.style.display === "none") {
            hiddenElement.style.display = "block";
        } else {
            hiddenElement.style.display = "none";
        }
    });
});

console.log("Script is running");