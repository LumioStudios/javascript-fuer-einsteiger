// Lösung zu Übung 14.5 – Test in der Konsole
// Starten mit: node loesung-14-5.js

function rechneInEuro(betragText, kurs) {
  const text = betragText.trim();

  if (text === "") {
    throw new Error("Bitte gib einen Betrag ein.");
  }

  const betrag = Number(text);

  if (Number.isNaN(betrag)) {
    throw new Error(`„${betragText}“ ist keine Zahl.`);
  }
  if (betrag < 0) {
    throw new Error("Der Betrag darf nicht negativ sein.");
  }
  if (!(kurs > 0)) {
    throw new Error("Der Kurs muss größer als 0 sein.");
  }

  return Math.round(betrag / kurs * 100) / 100;
}

const eingaben = ["100", "", "abc", "-5", "250.50"];

for (const eingabe of eingaben) {
  try {
    const euro = rechneInEuro(eingabe, 1.08);
    console.log(`${eingabe} → ${euro} €`);
  } catch (fehler) {
    console.log(`Fehler: ${fehler.message}`);
  }
}
