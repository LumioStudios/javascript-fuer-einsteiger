// Kapitel 6.3 – Eingabe wiederholen mit do…while
// Läuft nur im Browser (prompt). Öffne ja-nein.html.
let antwort;

do {
  antwort = prompt("Weiter? Tippe ja oder nein:");
} while (antwort !== "ja" && antwort !== "nein");

console.log("Deine Antwort:", antwort);
