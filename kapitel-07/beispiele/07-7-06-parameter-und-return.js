// Kapitel 7, Abschnitt 7.7: Besser: Parameter und return

function erhoehePunkte(stand, plus = 1) {
  return stand + plus;
}

let punkte = 0;
punkte = erhoehePunkte(punkte);
punkte = erhoehePunkte(punkte, 5);

console.log("Punkte:", punkte);
