// Notenrechner: Punkte (0–100) in Schulnoten

// 1. Eingabe abfragen und umwandeln
const eingabe = prompt("Wie viele Punkte? (0–100)");
const punkte = Number(eingabe);

// 2. Eingabe prüfen
let fehler = null;

if (eingabe === null || eingabe === "") {
  fehler = "Du hast nichts eingegeben.";
} else if (Number.isNaN(punkte)) {
  fehler = "Bitte gib nur eine Zahl ein.";
} else if (punkte < 0 || punkte > 100) {
  fehler = "Erlaubt sind 0 bis 100 Punkte.";
}

// 3. Note berechnen
let note;

if (punkte >= 92) {
  note = 1;
} else if (punkte >= 81) {
  note = 2;
} else if (punkte >= 67) {
  note = 3;
} else if (punkte >= 50) {
  note = 4;
} else if (punkte >= 30) {
  note = 5;
} else {
  note = 6;
}

// 4. Bezeichnung der Note bestimmen
let notenText;

switch (note) {
  case 1:
    notenText = "sehr gut";
    break;
  case 2:
    notenText = "gut";
    break;
  case 3:
    notenText = "befriedigend";
    break;
  case 4:
    notenText = "ausreichend";
    break;
  case 5:
    notenText = "mangelhaft";
    break;
  default:
    notenText = "ungenügend";
}

// 5. Bestanden ab Note 4
const ergebnis =
  note <= 4 ? "bestanden" : "nicht bestanden";

// 6. Ausgabe – nur bei gültiger Eingabe
if (fehler !== null) {
  console.log("Fehler:", fehler);
} else {
  console.log("Punkte:", punkte);
  console.log("Note:", note, "–", notenText);
  console.log("Ergebnis:", ergebnis);
}
