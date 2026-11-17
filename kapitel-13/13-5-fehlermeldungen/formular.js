// Kapitel 13.5 – Fehlermeldungen anzeigen
// Schicke das Formular leer ab und korrigiere dann
// die Felder: Die Meldungen verschwinden beim Tippen.

const formular = document.querySelector("#formular");
const vornameFeld = document.querySelector("#vorname");
const alterFeld = document.querySelector("#alter");
const ausgabe = document.querySelector("#ausgabe");

let abgeschickt = false;

// --- Prüfen ---

function pruefeName(name) {
  if (name === "") {
    return "Bitte gib deinen Namen ein.";
  }
  if (name.length < 2) {
    return "Der Name ist zu kurz.";
  }
  return "";
}

function pruefeAlter(text) {
  if (text === "") {
    return "Bitte gib dein Alter ein.";
  }

  const alter = Number(text);

  if (!Number.isInteger(alter)) {
    return "Bitte gib eine ganze Zahl ein.";
  }
  if (alter < 12 || alter > 120) {
    return "Das Alter muss zwischen 12 und 120 liegen.";
  }
  return "";
}

function leseDaten() {
  return {
    vorname: vornameFeld.value.trim(),
    alter: alterFeld.value.trim()
  };
}

// Reihenfolge wie die Felder auf der Seite
function pruefeFormular(daten) {
  return {
    vorname: pruefeName(daten.vorname),
    alter: pruefeAlter(daten.alter)
  };
}

function hatFehler(fehler) {
  for (const feldName in fehler) {
    if (fehler[feldName] !== "") {
      return true;
    }
  }
  return false;
}

// --- Anzeige ---

function zeigeFehler(feldName, meldung) {
  const feld = document.querySelector(`#${feldName}`);
  const ziel = document.querySelector(
    `#${feldName}-fehler`
  );

  ziel.textContent = meldung;
  feld.classList.toggle("ungueltig", meldung !== "");
}

function zeigeAlleFehler(fehler) {
  for (const feldName in fehler) {
    zeigeFehler(feldName, fehler[feldName]);
  }
}

function fokussiereErstenFehler(fehler) {
  for (const feldName in fehler) {
    if (fehler[feldName] !== "") {
      document.querySelector(`#${feldName}`).focus();
      return;
    }
  }
}

// --- Events ---

formular.addEventListener("submit", (event) => {
  event.preventDefault();
  abgeschickt = true;

  const daten = leseDaten();
  const fehler = pruefeFormular(daten);
  zeigeAlleFehler(fehler);

  if (hatFehler(fehler)) {
    fokussiereErstenFehler(fehler);
    ausgabe.textContent = "";
    return;
  }

  ausgabe.textContent = `Danke, ${daten.vorname}!`;
});

// Ein Listener für alle Felder (Bubbling)
formular.addEventListener("input", () => {
  if (abgeschickt) {
    zeigeAlleFehler(pruefeFormular(leseDaten()));
  }
});
