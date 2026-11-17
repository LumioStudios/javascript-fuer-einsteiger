// Adressbuch

// --- Bausteine ---

function erstelleKontakt(name, telefon, stadt) {
  return { name, telefon, stadt };
}

function zeigeKontakt(kontakt) {
  console.log(kontakt.name);
  console.log("  Telefon: " + kontakt.telefon);
  console.log("  Stadt:   " + kontakt.stadt);
}

function zeigeAlle(kontakte) {
  if (kontakte.length === 0) {
    console.log("Das Adressbuch ist leer.");
    return;
  }

  console.log(kontakte.length + " Kontakte:");
  for (const kontakt of kontakte) {
    zeigeKontakt(kontakt);
  }
}

function findeKontakt(kontakte, name) {
  return kontakte.find((k) => k.name === name);
}

function fuegeKontaktHinzu(kontakte, kontakt) {
  if (findeKontakt(kontakte, kontakt.name) !== undefined) {
    console.log(kontakt.name + " gibt es schon.");
    return;
  }

  kontakte.push(kontakt);
  console.log(kontakt.name + " gespeichert.");
}

function aendereFeld(kontakt, feld, neuerWert) {
  if (!(feld in kontakt) || feld === "name") {
    console.log("Dieses Feld kann nicht geändert werden.");
    return;
  }

  kontakt[feld] = neuerWert;
  console.log(kontakt.name + ": " + feld + " geändert.");
}

function frageText(frage) {
  const eingabe = prompt(frage);

  if (eingabe === null || eingabe === "") {
    return null; // abgebrochen oder leer
  }

  return eingabe;
}

// --- Daten ---

const adressbuch = [
  erstelleKontakt("Anna", "0151 7654321", "Köln"),
  erstelleKontakt("Ben", "0170 1234567", "Mainz")
];

// --- Menüpunkte ---

function neuerKontakt() {
  const name = frageText("Name:");
  if (name === null) {
    return;
  }

  const telefon = frageText("Telefonnummer:") ?? "-";
  const stadt = frageText("Stadt:") ?? "-";
  const kontakt = erstelleKontakt(name, telefon, stadt);
  fuegeKontaktHinzu(adressbuch, kontakt);
}

function kontaktSuchen() {
  const name = frageText("Wen suchst du?");
  if (name === null) {
    return;
  }

  const kontakt = findeKontakt(adressbuch, name);
  if (kontakt === undefined) {
    console.log(name + " ist nicht im Adressbuch.");
  } else {
    zeigeKontakt(kontakt);
  }
}

function kontaktAendern() {
  const name = frageText("Wessen Daten ändern?");
  if (name === null) {
    return;
  }

  const kontakt = findeKontakt(adressbuch, name);
  if (kontakt === undefined) {
    console.log(name + " ist nicht im Adressbuch.");
    return;
  }

  const feld = frageText("Welches Feld? (telefon/stadt)");
  const wert = frageText("Neuer Wert:");
  if (feld === null || wert === null) {
    return;
  }

  aendereFeld(kontakt, feld, wert);
}

// --- Ablauf ---

function starteAdressbuch() {
  while (true) {
    const auswahl = prompt(
      "1 = Kontakt hinzufügen\n" +
      "2 = Alle Kontakte anzeigen\n" +
      "3 = Kontakt suchen\n" +
      "4 = Kontakt ändern\n" +
      "0 = Beenden"
    );

    if (auswahl === null || auswahl === "0") {
      console.log("Adressbuch geschlossen.");
      return;
    }

    switch (auswahl) {
      case "1":
        neuerKontakt();
        break;
      case "2":
        zeigeAlle(adressbuch);
        break;
      case "3":
        kontaktSuchen();
        break;
      case "4":
        kontaktAendern();
        break;
      default:
        console.log("Unbekannte Auswahl.");
    }
  }
}

starteAdressbuch();
