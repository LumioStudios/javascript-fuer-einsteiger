// To-do-Liste – Stand nach Abschnitt 16.4
// Aufgaben abhaken und löschen

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

  const haken = document.createElement("input");
  haken.type = "checkbox";
  haken.checked = aufgabe.erledigt;
  haken.addEventListener("change", () => {
    schalteErledigt(aufgabe);
  });

  const text = document.createElement("span");
  text.textContent = aufgabe.text;
  text.classList.toggle("erledigt", aufgabe.erledigt);

  const beschriftung = document.createElement("label");
  beschriftung.append(haken, " ", text);

  const knopf = document.createElement("button");
  knopf.type = "button";
  knopf.textContent = "Löschen";
  knopf.addEventListener("click", () => {
    loescheAufgabe(aufgabe);
  });

  li.append(beschriftung, " ", knopf);
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

function schalteErledigt(aufgabe) {
  aufgabe.erledigt = !aufgabe.erledigt;
  zeigeAufgaben();
}

function loescheAufgabe(aufgabe) {
  const position = aufgaben.indexOf(aufgabe);

  if (position === -1) {
    return;
  }

  aufgaben.splice(position, 1);
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
