// 15.3 localStorage – Daten im Browser speichern
// Öffne speicher.html und drücke F12 (Konsole).
// Lade die Seite mehrmals neu: Die Werte bleiben.

// Wert lesen, der beim letzten Besuch gespeichert wurde
const alterName = localStorage.getItem("benutzerName");
console.log("Gespeicherter Name:", alterName);

// Einen Wert speichern und wieder lesen
localStorage.setItem("benutzerName", "Anna");
const name = localStorage.getItem("benutzerName");
console.log(`Hallo, ${name}!`);

// Unbekannter Schlüssel liefert null
const farbe = localStorage.getItem("lieblingsFarbe");
console.log(farbe);

// Alles ist Text: Zahlen kommen als String zurück
localStorage.setItem("punkte", 42);
const punkteText = localStorage.getItem("punkte");
console.log(punkteText, typeof punkteText);
console.log(punkteText + 8);
console.log(Number(punkteText) + 8);

// Objekte ohne JSON: Die Daten gehen verloren
const kunde = { name: "Ben", punkte: 120 };
localStorage.setItem("kundeFalsch", kunde);
console.log(localStorage.getItem("kundeFalsch"));

// Objekte mit JSON: so ist es richtig
localStorage.setItem("kunde", JSON.stringify(kunde));
const geladen = JSON.parse(localStorage.getItem("kunde"));
console.log(geladen.name);
console.log(geladen.punkte + 30);
