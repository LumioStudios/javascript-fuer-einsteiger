const liste = document.querySelector("#farben");
const punkte = liste.querySelectorAll("li");
const vorschau = document.querySelector("#vorschau");

// -1 bedeutet: noch keine Farbe gewählt
let position = -1;

function zeigeAuswahl() {
  for (let i = 0; i < punkte.length; i++) {
    const aktiv = i === position;
    punkte[i].classList.toggle("gewaehlt", aktiv);
  }

  if (position === -1) {
    vorschau.textContent = "Noch keine Farbe gewählt.";
    return;
  }

  const farbe = punkte[position].textContent;
  vorschau.style.backgroundColor = farbe;
  vorschau.textContent = `Gewählt: ${farbe}`;
}

// Ein Listener für alle Listenpunkte
liste.addEventListener("click", (event) => {
  if (event.target.tagName !== "LI") {
    return;
  }

  position = Array.from(punkte).indexOf(event.target);
  zeigeAuswahl();
});

document.addEventListener("keydown", (event) => {
  const letzte = punkte.length - 1;

  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      position = Math.min(position + 1, letzte);
      break;
    case "ArrowUp":
      event.preventDefault();
      position = Math.max(position - 1, 0);
      break;
    default:
      return;
  }

  zeigeAuswahl();
});

zeigeAuswahl();
