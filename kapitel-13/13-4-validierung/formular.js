// Kapitel 13.4 – Eingaben prüfen (Validierung)
// Die Fehler erscheinen hier noch in der Konsole.
// Wie sie auf die Seite kommen, zeigt Abschnitt 13.5.

const formular = document.querySelector("#formular");
const vornameFeld = document.querySelector("#vorname");
const alterFeld = document.querySelector("#alter");
const ausgabe = document.querySelector("#ausgabe");

// --- Prüffunktionen: Meldung oder "" ---

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

function pruefeEmail(email) {
  if (email === "") {
    return "Bitte gib deine E-Mail-Adresse ein.";
  }

  const posAt = email.indexOf("@");
  const posPunkt = email.lastIndexOf(".");

  const ok = posAt > 0 &&
    posPunkt > posAt + 1 &&
    posPunkt < email.length - 1 &&
    !email.includes(" ");

  if (!ok) {
    return "Das sieht nicht nach einer E-Mail aus.";
  }
  return "";
}

// --- Alle Felder auf einmal ---

function leseDaten() {
  return {
    vorname: vornameFeld.value.trim(),
    alter: alterFeld.value.trim()
  };
}

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

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  const daten = leseDaten();
  const fehler = pruefeFormular(daten);

  if (hatFehler(fehler)) {
    console.log(fehler);
    ausgabe.textContent = "Fehler – siehe Konsole.";
    return;
  }

  ausgabe.textContent = `Danke, ${daten.vorname}!`;
});

// --- Tests aus dem Kapitel ---

console.log(pruefeName(""));
console.log(pruefeName("A"));
console.log(pruefeName("Anna") === "");

console.log(pruefeAlter("34"));
console.log(pruefeAlter("34.5"));
console.log(pruefeAlter("8"));

console.log(pruefeEmail("anna@example.de"));
console.log(pruefeEmail("anna.example.de"));
console.log(pruefeEmail("anna@example"));
