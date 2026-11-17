// Kapitel 10.2: Wichtige String-Methoden
// Groß und klein: toUpperCase und toLowerCase
// Ausführen im Ordner kapitel-10: node beispiele/10-2-04_gross-und-klein-touppercase-und-tolowercase.js

function findeKontakt(kontakte, name) {
  const gesucht = name.toLowerCase();
  return kontakte.find(
    (k) => k.name.toLowerCase() === gesucht
  );
}

const kontakte = [
  { name: "Anna", stadt: "Köln" },
  { name: "Ben", stadt: "Mainz" }
];

console.log(findeKontakt(kontakte, "ben"));
console.log(findeKontakt(kontakte, "ANNA"));

// Ausgabe:
// { name: 'Ben', stadt: 'Mainz' }
// { name: 'Anna', stadt: 'Köln' }
