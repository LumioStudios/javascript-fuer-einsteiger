// Kapitel 9, Abschnitt 9.3 – Werte schreiben mit Klammern
// Ausführen: node 09-03-05_werte-schreiben-mit-klammern.js

const einstellungen = {};
const option = "sprache";

einstellungen[option] = "Deutsch";
einstellungen["dunkel"] = true;

console.log(einstellungen);

// Ausgabe:
// { sprache: 'Deutsch', dunkel: true }
