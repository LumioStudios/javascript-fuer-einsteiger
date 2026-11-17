const letzteElement = document.querySelector("#letzte");
const anzahlElement = document.querySelector("#anzahl");
const listeElement = document.querySelector("#liste");

let anzahl = 0;
let letzteTasten = [];

// Leertaste lesbar machen
function anzeigeName(taste) {
  if (taste === " ") {
    return "Leertaste";
  }
  return taste;
}

function zeigeSpion() {
  let letzte = "–";
  if (letzteTasten.length > 0) {
    letzte = letzteTasten[0];
  }

  letzteElement.textContent = `Letzte Taste: ${letzte}`;
  anzahlElement.textContent = `Gedrückt: ${anzahl}`;
  listeElement.textContent =
    `Zuletzt: ${letzteTasten.join(", ")}`;
}

function zuruecksetzen() {
  anzahl = 0;
  letzteTasten = [];
  zeigeSpion();
}

document.addEventListener("keydown", (event) => {
  if (event.repeat) {
    return;
  }

  if (event.key === "Escape") {
    zuruecksetzen();
    return;
  }

  anzahl++;
  letzteTasten.unshift(anzeigeName(event.key));

  if (letzteTasten.length > 5) {
    letzteTasten.pop();
  }

  zeigeSpion();
});

zeigeSpion();
