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
}

// INICIO
document.getElementById("startText").onclick = () => {
  show("s1");
};

// BOTONES
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
      "No te vas a librar de mí",
      "Siempre estaremos juntos",
      "Te vas a casar conmigo"
    ][Math.floor(Math.random() * 3)];
  });
}

makeNoRun(document.getElementById("no1"));
makeNoRun(document.getElementById("no2"));
