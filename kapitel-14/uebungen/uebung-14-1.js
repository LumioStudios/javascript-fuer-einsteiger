// Übung 14.1 – Fehlerarten bestimmen
// Jedes Programm enthält ABSICHTLICH einen Fehler.
// Kopiere die Teile einzeln in eine eigene Datei oder
// in die Konsole und führe sie getrennt aus.

// a)
const netto = 100;
const brutto = netto * 19;
console.log(`Brutto: ${brutto} €`);

// b)
// const stadt = "Frankfurt;
// console.log(stadt);
// (auskommentiert, sonst läuft die ganze Datei nicht)

// c)
const namen = ["Anna", "Ben"];
console.log(namen.lenght.toString());

// d)
let alter = 17;
if (alter > 18) {
  console.log("Volljährig");
} else {
  console.log("Minderjährig");
}
