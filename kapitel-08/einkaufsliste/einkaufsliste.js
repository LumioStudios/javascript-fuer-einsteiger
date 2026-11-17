// Einkaufsliste

const einkaufsliste = [];

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

function frageArtikel(frage) {
  const eingabe = prompt(frage);

  if (eingabe === null || eingabe === "") {
    return null; // abgebrochen oder leer
  }

  return eingabe;
}

// --- Ablauf ---

function starteEinkaufsliste() {
  while (true) {
    const auswahl = prompt(
      "1 = Artikel hinzufügen\n" +
      "2 = Liste anzeigen\n" +
      "3 = Letzten Artikel entfernen\n" +
      "4 = Artikel suchen\n" +
      "0 = Beenden"
    );

    if (auswahl === null || auswahl === "0") {
      console.log("Viel Spaß beim Einkaufen!");
      zeigeListe(einkaufsliste);
      return;
    }

    let artikel = null;

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
      default:
        console.log("Unbekannte Auswahl.");
    }
  }
}

starteEinkaufsliste();
