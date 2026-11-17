// Kapitel 5.4 – Rabatt mit dem ternären Operator
// Teste auch mit summe = 18.

const summe = 30;
const rabatt = summe >= 20 ? summe / 10 : 0;

console.log("Rabatt:", rabatt);
console.log("Endpreis:", summe - rabatt);
