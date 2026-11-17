// Kapitel 10 – Typische Fehler 3
// Mit dem Ergebnis von `toFixed` weiterrechnen
// ACHTUNG: Dieses Beispiel ist absichtlich fehlerhaft.
// Ausführen im Ordner kapitel-10: node beispiele/fehler-3_mit-dem-ergebnis-von-tofixed-weiterrechnen.js

const preis = (19.5).toFixed(2);
const versand = 4.9;

console.log(preis + versand);

// Ausgabe:
// 19.504.9
