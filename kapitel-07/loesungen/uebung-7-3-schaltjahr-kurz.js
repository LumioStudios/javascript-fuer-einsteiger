// Lösung zu Kapitel 7, Übung 7.3 – Schaltjahre (Kurzform)

const istSchaltjahr = (jahr) =>
  (jahr % 4 === 0 && jahr % 100 !== 0) ||
  jahr % 400 === 0;

console.log(istSchaltjahr(1900), istSchaltjahr(2000));
