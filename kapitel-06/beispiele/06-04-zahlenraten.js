// Kapitel 6.4 – while (true) mit break
// Läuft nur im Browser (prompt). Öffne zahlenraten.html.
const geheimZahl = 7;
let versuche = 0;

while (true) {
  const eingabe = prompt("Rate eine Zahl (1–10):");

  if (eingabe === null) {
    console.log("Spiel abgebrochen.");
    break;
  }

  const tipp = Number(eingabe);

  if (Number.isNaN(tipp)) {
    console.log("Das ist keine Zahl.");
    continue;
  }

  versuche++;

  if (tipp === geheimZahl) {
    console.log("Richtig nach", versuche, "Versuchen!");
    break;
  }

  const hinweis =
    tipp < geheimZahl ? "Zu niedrig!" : "Zu hoch!";
  console.log(hinweis);
}
