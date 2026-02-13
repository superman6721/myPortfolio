const mode = document.getElementById("mode");
const body = document.body;

mode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

let theme = localStorage.getItem("theme");
if(theme == 'dark') {body.classList.add("dark-mode")};


const skillsBtn = document.getElementById("skills");

const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const php = document.getElementById("php");
const mysql = document.getElementById("mysql");

const laravel = document.getElementById("laravel");
const bootstrap = document.getElementById("bootstrap");
const sweetAlert = document.getElementById("sweetAlert");
const react = document.getElementById("react");

function showSkillBar () {
    html.style.width = '0%';
    css.style.width = '0%';
    js.style.width = '0%';
    php.style.width = '0';
    mysql.style.width = '0';
    laravel.style.width = '0';
    bootstrap.style.width = '0%';
    sweetAlert.style.width = '0%';
    react.style.width = '0%';

    html.style.width = '70%';
    css.style.width = '60%';
    js.style.width = '74%';
    php.style.width = '66%';
    mysql.style.width = '80%';
    laravel.style.width = '74%';
    bootstrap.style.width = '80%';
    sweetAlert.style.width = '30%';
    react.style.width = '20%';
}

document.addEventListener("DOMContentLoaded", showSkillBar);