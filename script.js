const mode = document.getElementById("mode");
const body = document.body;

mode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
})