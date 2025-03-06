let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split(""); // Fixed `textContent` and `split`
    word.textContent = ""; // Removed extra space

    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1"; // Fixed opacity setting

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in"; // Fixed `localName` to `className`
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);


// circle skill /////////////////////////

const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");  // Convert to integer
    var marked = elem.getAttribute("data-percent"); // Convert to integer
    var percent = Math.floor(dots * marked / 100);  // Corrected Math.floor
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {  // Fixed loop variable
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`; // Fixed rotation
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

// active menue /////////////////////////
let menuLi = document.querySelectorAll("header ul li a");
let sections = document.querySelectorAll("section");

function activeMenu() {
    let len = sections.length;

    while (--len && window.scrollY + 97 < sections[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky navbar /////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
});


// toggle icon navbar /////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x"); // Toggles the icon class
    navbar.classList.toggle("open");   // Corrected variable name from "navlist" to "navbar"
};

window.onscroll = () => {
    menuIcon.classList.remove("bx-x"); // Toggles the icon class
    navbar.classList.remove("open");   // Corrected variable name from "navlist" to "navbar"
};


// parallax /////////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items"); // Fixed classList usage
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

