// Lösung zu Übung 8.5 – Einkaufsliste erweitern

// Einkaufsliste mit Entfernen nach Nummer

let einkaufsliste = [];

// --- Bausteine ---

function zeigeListe(liste) {
  if (liste.length === 0) {
    console.log("Die Liste ist leer.");
    return;
  }

  console.log("Einkaufsliste:");
  for (let i = 0; i < liste.length; i++) {
    console.log((i + 1) + ". " + liste[i]);
  }
}

function fuegeHinzu(liste, artikel) {
  if (liste.includes(artikel)) {
    console.log(artikel + " steht schon drauf.");
    return;
  }

  liste.push(artikel);
  console.log(artikel + " hinzugefügt.");
}

function entferneLetzten(liste) {
  const artikel = liste.pop();

  if (artikel === undefined) {
    console.log("Es gibt nichts zu entfernen.");
  } else {
    console.log(artikel + " entfernt.");
  }
}

function sucheArtikel(liste, artikel) {
  const position = liste.indexOf(artikel);

  if (position === -1) {
    console.log(artikel + " steht nicht drauf.");
    return;
  }

  const platz = position + 1;
  console.log(artikel + " steht auf Platz " + platz + ".");
}

function ohneElement(liste, index) {
  const neueListe = [];

  for (let i = 0; i < liste.length; i++) {
    if (i === index) {
      continue; // dieses Element überspringen
    }
    neueListe.push(liste[i]);
  }

  return neueListe;
}

// --- Eingabe ---

function frageArtikel(frage) {
  const eingabe = prompt(frage);

  if (eingabe === null || eingabe === "") {
    return null; // abgebrochen oder leer
  }

  return eingabe;
}

function liesZahl(frage) {
  while (true) {
    const eingabe = prompt(frage);

    if (eingabe === null) {
      return null; // Abbrechen geklickt
    }

    const zahl = Number(eingabe);

    if (eingabe !== "" && !Number.isNaN(zahl)) {
      return zahl; // gültige Zahl
    }

    alert("Bitte gib eine Zahl ein, z. B. 2");
  }
}

// --- Ablauf ---

function starteEinkaufsliste() {
  while (true) {
    const auswahl = prompt(
      "1 = Artikel hinzufügen\n" +
      "2 = Liste anzeigen\n" +
      "3 = Letzten Artikel entfernen\n" +
      "4 = Artikel suchen\n" +
      "5 = Artikel nach Nummer entfernen\n" +
      "0 = Beenden"
    );

    if (auswahl === null || auswahl === "0") {
      console.log("Viel Spaß beim Einkaufen!");
      zeigeListe(einkaufsliste);
      return;
    }

    let artikel = null;
    let nummer = null;

    switch (auswahl) {
      case "1":
        artikel = frageArtikel("Was soll auf die Liste?");
        if (artikel !== null) {
          fuegeHinzu(einkaufsliste, artikel);
        }
        break;
      case "2":
        zeigeListe(einkaufsliste);
        break;
      case "3":
        entferneLetzten(einkaufsliste);
        break;
      case "4":
        artikel = frageArtikel("Wonach suchst du?");
        if (artikel !== null) {
          sucheArtikel(einkaufsliste, artikel);
        }
        break;
      case "5":
        nummer = liesZahl("Welche Nummer entfernen?");
        if (nummer === null) {
          break;
        }
        if (nummer < 1 || nummer > einkaufsliste.length) {
          console.log("Diese Nummer gibt es nicht.");
          break;
        }
        artikel = einkaufsliste[nummer - 1];
        einkaufsliste = ohneElement(
          einkaufsliste,
          nummer - 1
        );
        console.log(artikel + " entfernt.");
        break;
      default:
        console.log("Unbekannte Auswahl.");
    }
  }
}

starteEinkaufsliste();
