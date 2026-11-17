// Lösung zu Übung 10.2 – Textwerkzeuge
// Ausführen im Ordner kapitel-10: node loesungen/uebung-10-2-2_initialen.js

function initialen(name) {
  const teile = name.trim().split(" ");
  const buchstaben = [];

  for (const teil of teile) {
    const erster = teil.slice(0, 1).toUpperCase();
    buchstaben.push(`${erster}.`);
  }

  return buchstaben.join(" ");
}

console.log(initialen("anna maria schmidt"));
console.log(initialen("Ben Krüger"));
console.log(initialen("  clara  "));

// Ausgabe:
// A. M. S.
// B. K.
// C.
