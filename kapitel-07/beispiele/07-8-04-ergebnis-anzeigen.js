// Kapitel 7, Abschnitt 7.8: Schritt 5: Das Ergebnis anzeigen
// Hilfsfunktion aus dem vorherigen Beispiel:

const runde = (zahl) => Math.round(zahl * 10) / 10;

function zeigeErgebnis(wert, von, ergebnis, nach) {
  console.log(
    runde(wert) + " " + von + " = " +
    runde(ergebnis) + " " + nach
  );
}

zeigeErgebnis(100, "°F", 37.77777777777778, "°C");
