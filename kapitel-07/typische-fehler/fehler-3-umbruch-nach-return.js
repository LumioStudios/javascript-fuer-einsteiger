// Kapitel 7, typischer Fehler 3: Ein Zeilenumbruch direkt nach return
// Dieser Code ist absichtlich fehlerhaft.

function gibGruss() {
  return
    "Hallo!";
}

console.log(gibGruss());
