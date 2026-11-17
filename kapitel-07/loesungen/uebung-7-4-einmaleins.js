// Lösung zu Kapitel 7, Übung 7.4 – Einmaleins aufräumen

function fuelleAuf(zahl) {
  if (zahl < 10) {
    return "   " + zahl;
  }

  if (zahl < 100) {
    return "  " + zahl;
  }

  return " " + zahl;
}

function zeigeEinmaleins(groesse = 10) {
  for (let zeile = 1; zeile <= groesse; zeile++) {
    let text = "";

    for (let spalte = 1; spalte <= groesse; spalte++) {
      text += fuelleAuf(zeile * spalte);
    }

    console.log(text);
  }
}

zeigeEinmaleins(5);
console.log("");
zeigeEinmaleins();
