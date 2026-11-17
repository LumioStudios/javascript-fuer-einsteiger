// Kapitel 9 – Typischer Fehler 1: Gleichheitszeichen oder Semikolon im Objekt
// Dieses Beispiel erzeugt absichtlich einen Fehler.
// Ausführen: node fehler-1_gleichheitszeichen-im-objekt.js

const person = {
  name = "Anna",
  alter = 34
};

// Ausgabe:
// SyntaxError: Invalid shorthand property initializer
