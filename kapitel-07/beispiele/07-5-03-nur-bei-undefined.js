// Kapitel 7, Abschnitt 7.5: Standardwerte greifen nur bei undefined

function begruesse(name = "Gast") {
  console.log("Hallo, " + name + "!");
}

begruesse(undefined);
begruesse(null);
begruesse("");
