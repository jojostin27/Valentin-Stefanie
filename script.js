const screens = {
  loader: document.getElementById("loader"),
  s1: document.getElementById("screen1"),
  s2: document.getElementById("screen2"),
  s3: document.getElementById("screen3"),
  final: document.getElementById("final")
};

function show(screen) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[screen].classList.add("active");

  // Cuando llega al final
  if (screen === "final") {
    lanzarFuegos();
  }
}

// INICIO
document.getElementById("startText").onclick = () => {
  show("s1");
  lanzarCorazones(); // empiezan los corazones
};

// BOTONES SÍ
document.getElementById("yes1").onclick = () => show("s2");
document.getElementById("yes2").onclick = () => show("s3");
document.getElementById("yes3").onclick = () => show("final");

// BOTONES NO QUE HUYEN
function makeNoRun(btn) {
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

makeNoRun(document.getElementById("no1"));
makeNoRun(document.getElementById("no2"));

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
