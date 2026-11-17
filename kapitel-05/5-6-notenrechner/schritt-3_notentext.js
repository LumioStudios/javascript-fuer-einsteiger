// Kapitel 5.6 – Notenrechner, Schritt 3: Bezeichnung
// Teste mit note = 1 bis 6.

const note = 3;
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

console.log("Note:", note, "–", notenText);
