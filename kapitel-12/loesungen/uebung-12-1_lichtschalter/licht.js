const schalter = document.querySelector("#schalter");
let lichtAn = true;

// Seite nach der Variablen ausrichten
function zeigeLicht() {
  document.body.classList.toggle("dunkel", !lichtAn);

  if (lichtAn) {
    schalter.textContent = "Licht aus";
  } else {
    schalter.textContent = "Licht an";
  }
}

schalter.addEventListener("click", () => {
  lichtAn = !lichtAn;
  zeigeLicht();
});

zeigeLicht();
