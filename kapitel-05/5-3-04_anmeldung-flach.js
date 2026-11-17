// Kapitel 5.3 – Fehlerfälle zuerst aussortieren
// Gleiche Logik wie 5-3-01, aber ohne Verschachtelung.

const benutzerName = "lena";
const passwort = "falsch";

if (benutzerName !== "lena") {
  console.log("Benutzer unbekannt.");
} else if (passwort !== "geheim123") {
  console.log("Falsches Passwort.");
} else {
  console.log("Willkommen zurück, Lena!");
}
