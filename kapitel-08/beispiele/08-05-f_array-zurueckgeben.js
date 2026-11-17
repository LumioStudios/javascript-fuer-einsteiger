// Kapitel 8.5 – Arrays durchlaufen mit for und for…of

function erstelleReihe(zahl, anzahl) {
  const reihe = [];

  for (let i = 1; i <= anzahl; i++) {
    reihe.push(zahl * i);
  }

  return reihe;
}

console.log(erstelleReihe(3, 5));
console.log(erstelleReihe(7, 4));
