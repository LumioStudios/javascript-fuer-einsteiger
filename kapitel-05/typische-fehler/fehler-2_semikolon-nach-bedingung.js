// Typischer Fehler 2: Semikolon nach der Bedingung
// Der Block läuft immer, obwohl punkte nur 10 ist.
// Richtig wäre: if (punkte > 50) {

const punkte = 10;

if (punkte > 50); {
  console.log("Bestanden!");
}
