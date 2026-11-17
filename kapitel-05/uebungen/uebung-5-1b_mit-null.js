// Übung 5.1 – Erweiterte Version mit else if
// Teste mit 0, 7 und 12.
// Die Prüfung auf 0 muss zuerst kommen,
// denn 0 % 2 ergibt ebenfalls 0.

const zahl = 0;

if (zahl === 0) {
  console.log("Die Zahl ist null.");
} else if (zahl % 2 === 0) {
  console.log("Die Zahl ist gerade.");
} else {
  console.log("Die Zahl ist ungerade.");
}
