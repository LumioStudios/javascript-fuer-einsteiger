// Lösung zu Übung 6.4 – Zahlenraten mit Versuchen
// Läuft nur im Browser (prompt). Öffne loesung-6-4.html.
const geheimZahl = 7;
const maxVersuche = 5;
let versuche = 0;
let gewonnen = false;
let abgebrochen = false;

while (versuche < maxVersuche) {
  const eingabe = prompt("Rate eine Zahl (1–10):");

  if (eingabe === null) {
    abgebrochen = true;
    break;
  }

  const tipp = Number(eingabe);

  if (eingabe === "" || Number.isNaN(tipp)) {
    console.log("Das ist keine Zahl.");
    continue;
  }

  if (tipp < 1 || tipp > 10) {
    console.log("Bitte nur 1 bis 10.");
    continue;
  }

  versuche++;

  if (tipp === geheimZahl) {
    gewonnen = true;
    break;
  }

  const hinweis =
    tipp < geheimZahl ? "Zu niedrig!" : "Zu hoch!";
  console.log(hinweis);

  const uebrig = maxVersuche - versuche;

  if (uebrig > 0) {
    const wort = uebrig === 1 ? "Versuch" : "Versuche";
    console.log("Noch", uebrig, wort, "übrig.");
  }
}

// Ergebnis nach der Schleife ausgeben
if (gewonnen) {
  console.log("Richtig nach", versuche, "Versuchen!");
} else if (abgebrochen) {
  console.log("Spiel abgebrochen.");
} else {
  console.log("Leider verloren. Die Zahl war 7.");
}
