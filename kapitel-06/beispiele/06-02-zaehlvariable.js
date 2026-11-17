// Kapitel 6.2 – Die Zählvariable gibt es nur
// in der Schleife. Die letzte Zeile erzeugt
// absichtlich einen ReferenceError.
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

console.log("Nach der Schleife:", i);
