// Einmaleins-Tabelle in der Konsole

// 1. So lange fragen, bis die Eingabe passt
let groesse = 0;

while (true) {
  const eingabe = prompt("Größe der Tabelle? (1–20)");

  if (eingabe === null) {
    break; // Abbrechen geklickt
  }

  const zahl = Number(eingabe);

  if (eingabe === "" || Number.isNaN(zahl)) {
    alert("Bitte gib eine Zahl ein.");
  } else if (zahl < 1 || zahl > 20) {
    alert("Erlaubt sind 1 bis 20.");
  } else if (zahl % 1 !== 0) {
    alert("Bitte nur ganze Zahlen.");
  } else {
    groesse = zahl;
    break; // gültige Eingabe
  }
}

// 2. Abbruch oder Tabelle ausgeben
if (groesse === 0) {
  console.log("Keine Tabelle erstellt.");
} else {
  for (let zeile = 1; zeile <= groesse; zeile++) {
    let text = "";

    for (let spalte = 1; spalte <= groesse; spalte++) {
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
}
