// Kapitel 5.4 – Verschachtelter ternärer Operator
// Funktioniert, ist aber schwer zu lesen.
// Besser: eine else-if-Kette (siehe 5-2-03).

const punkte = 70;
const urteil =
  punkte >= 90 ? "super" : punkte >= 50 ? "ok" : "schade";

console.log(urteil);
