// Abschnitt 2.4: alert, prompt und confirm
// Funktioniert nur im Browser, nicht in Node.js!

// Eine Meldung anzeigen
alert("Willkommen auf meiner Seite!");

// Eine Eingabe abfragen
console.log(prompt("Wie heißt du?"));

// Eingabe mit Vorschlag
console.log(prompt("Deine Stadt?", "Frankfurt"));

// Eingabe speichern und weiterverwenden
const benutzerName = prompt("Wie heißt du?");
alert("Hallo, " + benutzerName + "!");

// Eine Ja-/Nein-Frage stellen
console.log(confirm("Möchtest du fortfahren?"));
