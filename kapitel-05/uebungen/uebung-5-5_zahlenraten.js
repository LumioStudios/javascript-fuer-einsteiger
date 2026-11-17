// Übung 5.5 – Zahlenraten: ein Tipp von 1 bis 10
const geheimZahl = 7;

const eingabe = prompt("Rate eine Zahl von 1 bis 10:");
const tipp = Number(eingabe);

if (eingabe === null || eingabe === "") {
  console.log("Keine Eingabe.");
} else if (Number.isNaN(tipp)) {
  console.log("Das ist keine Zahl.");
} else if (tipp < 1 || tipp > 10) {
  console.log("Bitte nur 1 bis 10.");
} else if (tipp === geheimZahl) {
  console.log("Richtig geraten!");
} else {
  // Kleinere Zahl von der größeren abziehen
  const abstand = tipp > geheimZahl
    ? tipp - geheimZahl
    : geheimZahl - tipp;

  const richtung =
    tipp > geheimZahl ? "Zu hoch!" : "Zu niedrig!";
  const hinweis =
    abstand === 1 ? "knapp daneben" : "weit daneben";

  console.log(richtung);
  console.log("Das war", hinweis + ".");
}
