// Kapitel 9 – Typischer Fehler 3: Auf eine Eigenschaft von `undefined` zugreifen
// Dieses Beispiel erzeugt absichtlich einen Fehler.
// Ausführen: node fehler-3_eigenschaft-von-undefined.js

const kontakte = [{ name: "Anna", stadt: "Köln" }];

const treffer = kontakte.find((k) => k.name === "Ben");
console.log(treffer.stadt);

// Ausgabe:
// TypeError: Cannot read properties of undefined (reading 'stadt')
