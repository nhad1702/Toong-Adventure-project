const div = document.getElementById("navbar");

document.getElementById("nav").addEventListener("mouseover", e => {
    e.preventDefault();
    div.classList.remove("dpNone");
})

document.getElementById("nav").addEventListener("mouseout", e => {
    e.preventDefault();
    div.classList.add("dpNone");
})