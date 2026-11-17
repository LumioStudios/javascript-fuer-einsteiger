// To-do-Liste – Stand nach Abschnitt 16.3
// Aufgaben hinzufügen und zählen

// --- Elemente und Zustand ---

const formular = document.querySelector("#formular");
const eingabe = document.querySelector("#eingabe");
const meldung = document.querySelector("#meldung");
const liste = document.querySelector("#liste");
const zaehler = document.querySelector("#zaehler");

const aufgaben = [];

// --- Anzeigen ---

function erstelleEintrag(aufgabe) {
  const li = document.createElement("li");
  li.textContent = aufgabe.text;
  return li;
}

function zeigeZaehler() {
  let offen = 0;

  for (const aufgabe of aufgaben) {
    if (!aufgabe.erledigt) {
      offen++;
    }
  }

  const erledigt = aufgaben.length - offen;
  zaehler.textContent =
    `${offen} offen, ${erledigt} erledigt`;
}

function zeigeAufgaben() {
  liste.replaceChildren();

  for (const aufgabe of aufgaben) {
    liste.append(erstelleEintrag(aufgabe));
  }

  zeigeZaehler();
}

// --- Daten ändern ---

function fuegeAufgabeHinzu(text) {
  aufgaben.push({ text, erledigt: false });
  zeigeAufgaben();
}

// --- Events ---

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = eingabe.value.trim();

  if (text === "") {
    meldung.textContent = "Bitte gib eine Aufgabe ein.";
    return;
  }

  fuegeAufgabeHinzu(text);
  meldung.textContent = "";
  eingabe.value = "";
  eingabe.focus();
});

// --- Start ---

zeigeAufgaben();
