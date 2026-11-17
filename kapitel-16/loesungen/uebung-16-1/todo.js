// To-do-Liste – Lösung zu Übung 16.1
// Freundliche Hinweise und Gesamtzahl

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

function leerHinweis() {
  if (aufgaben.length === 0) {
    return "Noch keine Aufgaben – leg los!";
  }

  if (aktuellerFilter === "erledigt") {
    return "Hier ist noch nichts erledigt.";
  }

  return "Alles erledigt – gut gemacht!";
}

function zeigeZaehler(angezeigt) {
  let offen = 0;

  for (const aufgabe of aufgaben) {
    if (!aufgabe.erledigt) {
      offen++;
    }
  }

  const erledigt = aufgaben.length - offen;
  const gesamt = aufgaben.length;
  const wort = gesamt === 1 ? "Aufgabe" : "Aufgaben";

  let text = `${offen} offen, ${erledigt} erledigt`;
  text += ` – ${gesamt} ${wort} insgesamt`;

  if (angezeigt === 0) {
    text = `${leerHinweis()} ${text}`;
  }

  zaehler.textContent = text;
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

  let angezeigt = 0;

  for (const aufgabe of aufgaben) {
    if (passtZumFilter(aufgabe)) {
      liste.append(erstelleEintrag(aufgabe));
      angezeigt++;
    }
  }

  zeigeZaehler(angezeigt);
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

// --- Start ---

zeigeAufgaben();
