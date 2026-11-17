// Lösung zu Kapitel 7, Übung 7.2 – Rechteck-Rechner (Teil 2 und 3)

const berechneFlaeche = (laenge, breite) =>
  laenge * breite;

const berechneUmfang = (laenge, breite) =>
  2 * laenge + 2 * breite;

const istQuadrat = (laenge, breite) => laenge === breite;

console.log(berechneFlaeche(4, 3));
console.log(berechneUmfang(4, 3));
console.log(istQuadrat(4, 3));
console.log(istQuadrat(5, 5));
