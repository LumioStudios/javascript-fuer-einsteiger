// Kapitel 10.1: Template Literals
// Mehrzeilige Texte
// Ausführen im Ordner kapitel-10: node beispiele/10-1-04_mehrzeilige-texte.js

const name = "Clara";
const datum = "14.11.2026";

const brief = `Hallo ${name},

danke für deine Bestellung vom ${datum}.

Viele Grüße
Lumio Studios`;

console.log(brief);

// Ausgabe:
// Hallo Clara,
//
// danke für deine Bestellung vom 14.11.2026.
//
// Viele Grüße
// Lumio Studios
