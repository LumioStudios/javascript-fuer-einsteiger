// Lösung zu Übung 10.1 – Visitenkarte
// Ausführen im Ordner kapitel-10: node loesungen/uebung-10-1_visitenkarte.js

const person = {
  vorname: "Anna",
  nachname: "Schmidt",
  beruf: "Webentwicklerin",
  stadt: "Köln"
};

const linie = "==================";
const nachname = person.nachname.toUpperCase();

const karte = `${linie}
${person.vorname} ${nachname}
${person.beruf}
aus ${person.stadt}
${linie}`;

console.log(karte);

// Ausgabe:
// ==================
// Anna SCHMIDT
// Webentwicklerin
// aus Köln
// ==================
