// Kapitel 7, Abschnitt 7.6: Die drei Schreibweisen im Vergleich

// 1. Funktionsdeklaration
function verdoppleA(zahl) {
  return zahl * 2;
}

// 2. Funktionsausdruck
const verdoppleB = function (zahl) {
  return zahl * 2;
};

// 3. Arrow Function
const verdoppleC = (zahl) => zahl * 2;

console.log(verdoppleA(5), verdoppleB(5), verdoppleC(5));
