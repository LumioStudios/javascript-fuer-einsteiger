// Fehler 2: Klammer nicht geschlossen
// Starten mit: node 02-klammer-fehlt.js

function begruesse(name) {
  if (name !== "") {
    console.log("Hallo, " + name);
}

// Lösung: Nach der } des if fehlt noch die } der
// Funktion. Sauber eingerückt sieht es so aus:
//
// function begruesse(name) {
//   if (name !== "") {
//     console.log("Hallo, " + name);
//   }
// }
