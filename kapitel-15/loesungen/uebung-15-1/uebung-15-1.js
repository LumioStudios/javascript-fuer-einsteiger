// Übung 15.1 – Gültiges JSON?
// Ausführen: node uebung-15-1.js

const texte = [
  '{"stadt": "Berlin", "einwohner": 3700000}',
  '{stadt: "Berlin"}',
  '["rot", "grün", "blau",]',
  '{"aktiv": true, "notiz": null}',
  "{'name': 'Ben'}",
  '"Hallo"'
];

for (const text of texte) {
  try {
    const wert = JSON.parse(text);
    console.log("gültig:", wert);
  } catch (fehler) {
    console.log("ungültig:", text);
  }
}
