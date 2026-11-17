// Kapitel 9, Abschnitt 9.7 – Schritt 3: Einen Kontakt finden
// Ausführen: node 09-07-02_kontakt-finden.js

function erstelleKontakt(name, telefon, stadt) {
  return { name, telefon, stadt };
}

function findeKontakt(kontakte, name) {
  return kontakte.find((k) => k.name === name);
}

const kontakte = [
  erstelleKontakt("Anna", "0151 7654321", "Köln"),
  erstelleKontakt("Ben", "0170 1234567", "Mainz")
];

console.log(findeKontakt(kontakte, "Anna"));
console.log(findeKontakt(kontakte, "Clara"));

// Ausgabe:
// { name: 'Anna', telefon: '0151 7654321', stadt: 'Köln' }
// undefined
