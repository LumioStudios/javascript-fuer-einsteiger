// Kapitel 10 – Typische Fehler 2
// Das Ergebnis einer String-Methode nicht speichern
// ACHTUNG: Dieses Beispiel ist absichtlich fehlerhaft.
// Ausführen im Ordner kapitel-10: node beispiele/fehler-2_das-ergebnis-einer-string-methode-nicht.js

let eingabe = "  ja ";

eingabe.trim();
eingabe.toUpperCase();

console.log(`[${eingabe}]`);

// Ausgabe:
// [  ja ]
