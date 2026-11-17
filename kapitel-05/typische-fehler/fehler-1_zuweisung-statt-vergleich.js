// Typischer Fehler 1: = statt === in der Bedingung
// Die Bedingung ist immer wahr, und alter wird verändert.
// Richtig wäre: if (alter === 18)

let alter = 16;

if (alter = 18) {
  console.log("Genau 18!");
}

console.log(alter);
