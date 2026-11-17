// Kapitel 9 – Typischer Fehler 4: `for…of` auf ein Objekt anwenden
// Dieses Beispiel erzeugt absichtlich einen Fehler.
// Ausführen: node fehler-4_for-of-auf-ein-objekt-anwenden.js

const person = { name: "Anna", alter: 34 };

for (const wert of person) {
  console.log(wert);
}

// Ausgabe:
// TypeError: person is not iterable
