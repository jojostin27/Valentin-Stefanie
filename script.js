const screens = {
  loader: document.getElementById("loader"),
  s1: document.getElementById("screen1"),
  s2: document.getElementById("screen2"),
  s3: document.getElementById("screen3"),
  final: document.getElementById("final")
};

function show(screen) {
  Object.values(screens).forEach(s => {
    if (s) s.classList.remove("active");
  });

  if (screens[screen]) {
    screens[screen].classList.add("active");
  }

  // Cuando llega al final
  if (screen === "final") {
    lanzarFuegos();
  }
}

// INICIO
const startBtn = document.getElementById("startText");
if(startBtn){
  startBtn.onclick = () => {
    show("s1");
    lanzarCorazones();
  };
}

// BOTONES SÍ
const yes1 = document.getElementById("yes1");
const yes2 = document.getElementById("yes2");
const yes3 = document.getElementById("yes3");

if(yes1) yes1.onclick = () => show("s2");
if(yes2) yes2.onclick = () => show("s3");
if(yes3) yes3.onclick = () => show("final");


// 🔥 BOTONES NO QUE HUYEN (TODOS)
function makeNoRun(id) {
  const btn = document.getElementById(id);
  if (!btn) return;

  btn.addEventListener("mouseover", () => {
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 80 + "%";
    btn.style.top = Math.random() * 80 + "%";

    btn.innerText = [
      "No te vas a librar de mí 😈",
      "Siempre estaremos juntos 💕",
      "Te vas a casar conmigo 💍"
    ][Math.floor(Math.random() * 3)];
  });
}

makeNoRun("no1");
makeNoRun("no2");
makeNoRun("no3"); // ← ESTE ES EL NUEVO


/* ❤️ CORAZONES */
function lanzarCorazones() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = Math.random() * 25 + 15 + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 400);
}


/* 🎆 FUEGOS ARTIFICIALES */
function lanzarFuegos(){
  setInterval(() => {
    const fuego = document.createElement("div");
    fuego.className = "firework";
    fuego.style.left = Math.random() * 100 + "vw";
    fuego.style.top = Math.random() * 80 + "vh";
    fuego.style.background = `hsl(${Math.random()*360}, 100%, 60%)`;
    document.body.appendChild(fuego);
    setTimeout(() => fuego.remove(), 1000);
  }, 300);
}


/* 💌 CARTA QUE SE ESCRIBE SOLA */
function abrirCarta(){
  const carta = document.getElementById("carta");
  const textoElemento = document.getElementById("textoCarta");

  if(!carta || !textoElemento) return;

  carta.style.display = "block";

  const texto = `
Mi amor ❤️

Ya llevamos 674 días juntos...
y cada uno ha sido especial.

Gracias por hacer mi vida más bonita,
por tu risa, tu cariño y tu paciencia.

Si pudiera elegir mil veces...
siempre te elegiría a ti.

Te amo infinitamente 💖
  `;

  let i = 0;
  textoElemento.innerHTML = "";

  const intervalo = setInterval(() => {
    textoElemento.innerHTML += texto[i] === "\n" ? "<br>" : texto[i];
    i++;

    if (i >= texto.length) {
      clearInterval(intervalo);
    }
  }, 35);
}