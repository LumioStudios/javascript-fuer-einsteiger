// Kapitel 6.6, Schritt 3 – Eine Zeile pro Reihe
for (let zeile = 1; zeile <= 3; zeile++) {
  let text = "";

  for (let spalte = 1; spalte <= 5; spalte++) {
    text += zeile * spalte + " ";
  }

  console.log(text);
}
