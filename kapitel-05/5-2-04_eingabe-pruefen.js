// Kapitel 5.2 – Eingaben prüfen
// Teste mit "abc", "-5", "0" und "42".

const eingabe = "abc";
const zahl = Number(eingabe);

if (Number.isNaN(zahl)) {
  console.log("Das ist keine Zahl.");
} else if (zahl < 0) {
  console.log("Die Zahl ist negativ.");
} else if (zahl === 0) {
  console.log("Die Zahl ist null.");
} else {
  console.log("Die Zahl ist positiv.");
}
