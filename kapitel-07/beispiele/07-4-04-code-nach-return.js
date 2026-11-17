// Kapitel 7, Abschnitt 7.4: Code nach return wird nie erreicht

function gibGruss() {
  return "Hallo!";
  console.log("Das sieht niemand.");
}

console.log(gibGruss());
