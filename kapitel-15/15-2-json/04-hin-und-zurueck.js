// 15.2 Hin und zurück
// Ausführen: node 04-hin-und-zurueck.js

const original = {
  titel: "Einkaufen",
  erledigt: false,
  punkte: [3, 5, 8]
};

const text = JSON.stringify(original);
const kopie = JSON.parse(text);

console.log(kopie.titel);
console.log(kopie.punkte[2]);

// Gleiche Daten, aber ein neues Objekt
console.log(kopie === original);
