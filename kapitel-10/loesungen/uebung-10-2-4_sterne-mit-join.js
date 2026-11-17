// Lösung zu Übung 10.2 – Textwerkzeuge
// Ausführen im Ordner kapitel-10: node loesungen/uebung-10-2-4_sterne-mit-join.js

const wort = "doof";
const sterne = wort.split("").fill("*").join("");

console.log(sterne);

// Ausgabe:
// ****
