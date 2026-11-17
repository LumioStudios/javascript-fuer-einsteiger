// Kapitel 14.5 – Praxisbeispiel: Mengen einlesen
// Starten mit: node lese-menge.js

function leseMenge(text) {
  const menge = Number(text);

  if (text.trim() === "" || !Number.isInteger(menge)) {
    throw new Error(`„${text}“ ist keine ganze Zahl.`);
  }
  if (menge < 1) {
    throw new Error("Die Menge muss mindestens 1 sein.");
  }
  return menge;
}

const eingaben = ["3", "zwei", "0", "5"];

for (const eingabe of eingaben) {
  try {
    const menge = leseMenge(eingabe);
    console.log(`OK: ${menge}`);
  } catch (fehler) {
    console.log(`Übersprungen: ${fehler.message}`);
  }
}
