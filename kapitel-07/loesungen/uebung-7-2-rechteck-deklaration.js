// Lösung zu Kapitel 7, Übung 7.2 – Rechteck-Rechner (Teil 1)

function berechneFlaeche(laenge, breite) {
  return laenge * breite;
}

function berechneUmfang(laenge, breite) {
  return 2 * laenge + 2 * breite;
}

const flaeche = berechneFlaeche(4, 3);
const umfang = berechneUmfang(4, 3);

console.log("Fläche:", flaeche, "m²");
console.log("Umfang:", umfang, "m");
