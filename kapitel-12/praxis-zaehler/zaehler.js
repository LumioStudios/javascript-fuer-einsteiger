// Zähler mit Buttons und Tastatur

// --- Daten ---

const minimum = 0;
const maximum = 20;
let stand = minimum;

// --- Elemente der Seite ---

const anzeigeElement = document.querySelector("#anzeige");
const infoElement = document.querySelector("#info");
const minusKnopf = document.querySelector("#minus");
const plusKnopf = document.querySelector("#plus");
const zurueckKnopf = document.querySelector("#zurueck");

// --- Anzeige ---

function zeigeStand() {
  const amRand = stand === minimum || stand === maximum;

  anzeigeElement.textContent = stand;
  anzeigeElement.classList.toggle("grenze", amRand);

  minusKnopf.disabled = stand === minimum;
  plusKnopf.disabled = stand === maximum;
}

// --- Daten ändern ---

function setzeStand(wert) {
  const unten = Math.max(wert, minimum);
  stand = Math.min(unten, maximum);
  zeigeStand();
}

function aendereStand(schritt) {
  setzeStand(stand + schritt);
}

function schrittweite(event) {
  return event.shiftKey ? 5 : 1;
}

// --- Events: Buttons ---

minusKnopf.addEventListener("click", (event) => {
  aendereStand(-schrittweite(event));
});

plusKnopf.addEventListener("click", (event) => {
  aendereStand(schrittweite(event));
});

zurueckKnopf.addEventListener("click", () => {
  setzeStand(minimum);
});

// --- Events: Tastatur ---

function verarbeiteTaste(event) {
  switch (event.key) {
    case "ArrowUp":
      event.preventDefault();
      aendereStand(schrittweite(event));
      break;
    case "ArrowDown":
      event.preventDefault();
      aendereStand(-schrittweite(event));
      break;
    case "Escape":
      setzeStand(minimum);
      break;
  }
}

document.addEventListener("keydown", verarbeiteTaste);

// --- Start ---

infoElement.textContent =
  `Bereich ${minimum} bis ${maximum}. ` +
  "Pfeiltasten zählen, Esc setzt zurück, " +
  "Shift zählt in Fünferschritten.";
zeigeStand();
