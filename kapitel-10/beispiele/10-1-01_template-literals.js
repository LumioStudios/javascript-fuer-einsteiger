// Kapitel 10.1: Template Literals
// Template Literals
// Ausführen im Ordner kapitel-10: node beispiele/10-1-01_template-literals.js

const name = "Anna";
const stadt = "Köln";

const alt = "Ich bin " + name + " aus " + stadt + ".";
const neu = `Ich bin ${name} aus ${stadt}.`;

console.log(alt);
console.log(neu);

// Ausgabe:
// Ich bin Anna aus Köln.
// Ich bin Anna aus Köln.
