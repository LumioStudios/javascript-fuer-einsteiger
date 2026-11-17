// Kapitel 8.5 – Arrays durchlaufen mit for und for…of

const preise = [1.5, 2.25, 0.75, 3.5];
let summe = 0;

for (const preis of preise) {
  summe += preis;
}

console.log("Summe:", summe);
console.log("Durchschnitt:", summe / preise.length);
