// Kapitel 5.1 – Variablen im Block
// ACHTUNG: Dieses Beispiel erzeugt absichtlich einen Fehler.
// "nachricht" gibt es nur innerhalb des if-Blocks.

const punkte = 80;

if (punkte > 50) {
  const nachricht = "Bestanden!";
  console.log(nachricht);
}

console.log(nachricht);
