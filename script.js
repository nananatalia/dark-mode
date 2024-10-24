const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const meme = document.getElementById(".meme");
const textBox = document.getElementById("text-box");


function darkMode() {
    nav.style.backgroundColor = "rgb(0 0 0 / 50%";
    textBox.style.backgroundColor = "rbg(255 255 255 / 50%)";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
    imageMode("dark");
}

function lightMode() {
    nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
    textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    imageMode("light");
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        lightMode();
    }
}

toggleSwitch.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
        darkMode();
    }
}
