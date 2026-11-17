const schluessel = "zaehler-daten";

const standAnzeige = document.querySelector("#stand");
const bestAnzeige = document.querySelector("#bestwert");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const zurueck = document.querySelector("#zurueck");

function ladeDaten() {
  const text = localStorage.getItem(schluessel);
  const start = { stand: 0, bestwert: 0 };

  if (text === null) {
    return start;
  }

  try {
    return JSON.parse(text);
  } catch (fehler) {
    console.error("Zählerdaten defekt:", fehler);
    return start;
  }
}

const daten = ladeDaten();

function speichereDaten() {
  localStorage.setItem(schluessel, JSON.stringify(daten));
}

function aktualisiere() {
  if (daten.stand > daten.bestwert) {
    daten.bestwert = daten.stand;
  }

  speichereDaten();
  standAnzeige.textContent = daten.stand;
  bestAnzeige.textContent = `Bestwert: ${daten.bestwert}`;
}

plus.addEventListener("click", () => {
  daten.stand++;
  aktualisiere();
});

minus.addEventListener("click", () => {
  daten.stand--;
  aktualisiere();
});

zurueck.addEventListener("click", () => {
  daten.stand = 0;
  aktualisiere();
});

// Gespeicherten Stand beim Laden anzeigen
aktualisiere();
