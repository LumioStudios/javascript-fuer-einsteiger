// Anmeldeformular mit Prüfung und Fehlermeldungen

// --- Elemente der Seite ---

const formular = document.querySelector("#anmeldung");
const erfolgElement = document.querySelector("#erfolg");
const kursFeld = document.querySelector("#kurs");

let abgeschickt = false;

// --- Daten lesen ---

function wert(id) {
  return document.querySelector(`#${id}`).value.trim();
}

function leseTermin() {
  const gewaehlt = document.querySelector(
    "input[name=termin]:checked"
  );
  return gewaehlt.value;
}

function leseDaten() {
  return {
    name: wert("name"),
    email: wert("email"),
    passwort: wert("passwort"),
    wiederholung: wert("wiederholung"),
    kurs: kursFeld.value,
    termin: leseTermin(),
    datenschutz:
      document.querySelector("#datenschutz").checked
  };
}

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

function enthaeltZiffer(text) {
  for (const zeichen of text) {
    if ("0123456789".includes(zeichen)) {
      return true;
    }
  }
  return false;
}

function pruefePasswort(passwort) {
  if (passwort.length < 8) {
    return "Mindestens 8 Zeichen, bitte.";
  }
  if (!enthaeltZiffer(passwort)) {
    return "Das Passwort braucht mindestens eine Ziffer.";
  }
  return "";
}

function pruefeWiederholung(passwort, wiederholung) {
  if (wiederholung === "") {
    return "Bitte wiederhole dein Passwort.";
  }
  if (wiederholung !== passwort) {
    return "Die Passwörter stimmen nicht überein.";
  }
  return "";
}

function pruefeKurs(kurs) {
  if (kurs === "") {
    return "Bitte wähle einen Kurs aus.";
  }
  return "";
}

function pruefeDatenschutz(zugestimmt) {
  if (!zugestimmt) {
    return "Ohne deine Zustimmung geht es leider nicht.";
  }
  return "";
}

function pruefeFormular(daten) {
  return {
    name: pruefeName(daten.name),
    email: pruefeEmail(daten.email),
    passwort: pruefePasswort(daten.passwort),
    wiederholung: pruefeWiederholung(
      daten.passwort, daten.wiederholung
    ),
    kurs: pruefeKurs(daten.kurs),
    datenschutz: pruefeDatenschutz(daten.datenschutz)
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

function kursName() {
  const option = kursFeld.options[kursFeld.selectedIndex];
  return option.textContent;
}

function zeigeErfolg(daten) {
  erfolgElement.textContent =
    `Danke, ${daten.name}! Du bist für den Kurs ` +
    `„${kursName()}“ am ${daten.termin} angemeldet. ` +
    `Die Bestätigung geht an ${daten.email}.`;
}

// --- Events ---

formular.addEventListener("submit", (event) => {
  event.preventDefault();
  abgeschickt = true;

  const daten = leseDaten();
  const fehler = pruefeFormular(daten);
  zeigeAlleFehler(fehler);

  if (hatFehler(fehler)) {
    erfolgElement.textContent = "";
    fokussiereErstenFehler(fehler);
    return;
  }

  zeigeErfolg(daten);
  formular.reset();
  abgeschickt = false;
});

formular.addEventListener("input", () => {
  if (abgeschickt) {
    zeigeAlleFehler(pruefeFormular(leseDaten()));
  }
});
