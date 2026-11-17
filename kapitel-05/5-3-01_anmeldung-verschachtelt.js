// Kapitel 5.3 – Verschachtelte Bedingungen
// Nur zum Üben: Echte Passwörter prüft man
// niemals im Browser, sondern auf dem Server.

const benutzerName = "lena";
const passwort = "geheim123";

if (benutzerName === "lena") {
  if (passwort === "geheim123") {
    console.log("Willkommen zurück, Lena!");
  } else {
    console.log("Falsches Passwort.");
  }
} else {
  console.log("Benutzer unbekannt.");
}
