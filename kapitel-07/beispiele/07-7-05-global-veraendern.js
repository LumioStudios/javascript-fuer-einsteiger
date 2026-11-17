// Kapitel 7, Abschnitt 7.7: Eine globale Variable verändern

let punkte = 0;

function gibPunkt() {
  punkte++;
}

gibPunkt();
gibPunkt();

console.log("Punkte:", punkte);
