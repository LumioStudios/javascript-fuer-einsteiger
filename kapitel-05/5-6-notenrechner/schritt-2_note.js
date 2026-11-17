// Kapitel 5.6 – Notenrechner, Schritt 2: Note berechnen
// Teste die Grenzen: 92, 91, 50 und 49.

const punkte = 78;
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

console.log("Punkte:", punkte, "Note:", note);
