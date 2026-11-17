function zeigeNachricht(text) {
  const element = document.querySelector("#ausgbe");
  element.textContent = text;
}

zeigeNachricht("Hallo!");

// Kapitel 14.2 – Eine Fehlermeldung lesen
// Enthält ABSICHTLICH einen Tippfehler im Selektor:
// "#ausgbe" statt "#ausgabe".
// Öffne fehler.html und drücke F12 (Reiter Konsole).
