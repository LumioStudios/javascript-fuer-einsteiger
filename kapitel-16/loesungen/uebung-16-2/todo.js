// To-do-Liste – Lösung zu Übung 16.2
// Erledigte Aufgaben auf einmal löschen

const speicherSchluessel = "todoApp-aufgaben";

// --- Laden und Speichern ---

function ladeAufgaben() {
  const text = localStorage.getItem(speicherSchluessel);

  if (text === null) {
    return [];
  }

  try {
    const daten = JSON.parse(text);

    if (!Array.isArray(daten)) {
      return [];
    }

    return daten;
  } catch (fehler) {
    console.error("Aufgaben defekt:", fehler);
    return [];
  }
}

function speichereAufgaben() {
  const text = JSON.stringify(aufgaben);
  localStorage.setItem(speicherSchluessel, text);
}

// --- Elemente und Zustand ---

const formular = document.querySelector("#formular");
const eingabe = document.querySelector("#eingabe");
const meldung = document.querySelector("#meldung");
const liste = document.querySelector("#liste");
const zaehler = document.querySelector("#zaehler");

const filterAlle = document.querySelector("#filterAlle");
const filterOffen = document.querySelector("#filterOffen");
const filterErledigt =
  document.querySelector("#filterErledigt");
const erledigteButton =
  document.querySelector("#erledigteLoeschen");

const aufgaben = ladeAufgaben();
let aktuellerFilter = "alle";

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

function passtZumFilter(aufgabe) {
  if (aktuellerFilter === "offen") {
    return !aufgabe.erledigt;
  }

  if (aktuellerFilter === "erledigt") {
    return aufgabe.erledigt;
  }

  return true;
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

function zeigeFilterButtons() {
  const f = aktuellerFilter;
  filterAlle.classList.toggle("aktiv", f === "alle");
  filterOffen.classList.toggle("aktiv", f === "offen");
  filterErledigt.classList.toggle(
    "aktiv",
    f === "erledigt"
  );
}

function zeigeAufgaben() {
  liste.replaceChildren();

  for (const aufgabe of aufgaben) {
    if (passtZumFilter(aufgabe)) {
      liste.append(erstelleEintrag(aufgabe));
    }
  }

  zeigeZaehler();
  zeigeFilterButtons();
}

// --- Daten ändern ---

function aktualisiere() {
  speichereAufgaben();
  zeigeAufgaben();
}

function fuegeAufgabeHinzu(text) {
  aufgaben.push({ text, erledigt: false });
  aktualisiere();
}

function schalteErledigt(aufgabe) {
  aufgabe.erledigt = !aufgabe.erledigt;
  aktualisiere();
}

function loescheAufgabe(aufgabe) {
  const position = aufgaben.indexOf(aufgabe);

  if (position === -1) {
    return;
  }

  aufgaben.splice(position, 1);
  aktualisiere();
}

function loescheErledigte() {
  // Rückwärts laufen, damit nichts übersprungen wird
  for (let i = aufgaben.length - 1; i >= 0; i--) {
    if (aufgaben[i].erledigt) {
      aufgaben.splice(i, 1);
    }
  }

  aktualisiere();
}

function setzeFilter(filter) {
  aktuellerFilter = filter;
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

filterAlle.addEventListener("click", () => {
  setzeFilter("alle");
});

filterOffen.addEventListener("click", () => {
  setzeFilter("offen");
});

filterErledigt.addEventListener("click", () => {
  setzeFilter("erledigt");
});

erledigteButton.addEventListener("click", () => {
  let anzahl = 0;

  for (const aufgabe of aufgaben) {
    if (aufgabe.erledigt) {
      anzahl++;
    }
  }

  if (anzahl === 0) {
    return;
  }

  const frage = `${anzahl} erledigte löschen?`;

  if (confirm(frage)) {
    loescheErledigte();
  }
});

// --- Start ---

zeigeAufgaben();
