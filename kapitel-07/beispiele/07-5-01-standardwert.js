// Kapitel 7, Abschnitt 7.5: Ein Standardwert

function begruesse(name = "Gast") {
  console.log("Hallo, " + name + "!");
}

begruesse("Anna");
begruesse();
