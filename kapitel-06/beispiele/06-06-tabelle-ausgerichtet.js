// Kapitel 6.6, Schritt 4 – Die Spalten ausrichten
for (let zeile = 1; zeile <= 10; zeile++) {
  let text = "";

  for (let spalte = 1; spalte <= 10; spalte++) {
    const produkt = zeile * spalte;

    // Auf vier Zeichen Breite auffüllen
    if (produkt < 10) {
      text += "   ";
    } else if (produkt < 100) {
      text += "  ";
    } else {
      text += " ";
    }

    text += produkt;
  }

  console.log(text);
}
