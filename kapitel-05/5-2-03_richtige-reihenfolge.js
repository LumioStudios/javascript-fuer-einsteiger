// Kapitel 5.2 – Die Reihenfolge entscheidet (RICHTIG)
// Die strengste Bedingung steht zuerst.

const punkte = 95;

if (punkte >= 90) {
  console.log("Sehr gut");
} else if (punkte >= 50) {
  console.log("Bestanden");
} else {
  console.log("Nicht bestanden");
}
