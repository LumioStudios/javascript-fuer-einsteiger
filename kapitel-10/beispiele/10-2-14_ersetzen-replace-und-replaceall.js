// Kapitel 10.2: Wichtige String-Methoden
// Ersetzen: replace und replaceAll
// Ausführen im Ordner kapitel-10: node beispiele/10-2-14_ersetzen-replace-und-replaceall.js

const text = "Ich mag Tee. Tee ist lecker.";

console.log(text.replace("Tee", "Kaffee"));
console.log(text.replaceAll("Tee", "Kaffee"));

// Ausgabe:
// Ich mag Kaffee. Tee ist lecker.
// Ich mag Kaffee. Kaffee ist lecker.
