const loading = document.getElementById("loading");
const main = document.getElementById("main");
const final = document.getElementById("final");

const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let step = 0;

loading.addEventListener("click", () => {
    loading.classList.remove("active");
    main.classList.add("active");
    question.textContent = "¿Quieres ser mi Valentine, Ayudina (stefanie amor de mi vida)?";
});

yesBtn.addEventListener("click", () => {
    step++;

    if (step === 1) {
        question.textContent = "¿Estás segura?";
    } 
    else if (step === 2) {
        question.textContent = "¿Si aceptas vas a tener 10 hijos conmigo, estás realmente segura?";
    } 
    else {
        main.classList.remove("active");
        final.classList.add("active");
    }
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    const frases = [
        "no te vas a librar de mí",
        "siempre estaremos juntos",
        "te vas a casar conmigo"
    ];

    question.textContent = frases[Math.floor(Math.random() * frases.length)];
});
