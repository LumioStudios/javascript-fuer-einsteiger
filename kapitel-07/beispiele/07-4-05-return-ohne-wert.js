// Kapitel 7, Abschnitt 7.4: return ohne Wert

function zeigeStrecke(km) {
  if (km <= 0) {
    console.log("Ungültige Strecke.");
    return;
  }

  console.log("Strecke:", km, "km");
}

zeigeStrecke(12);
zeigeStrecke(-3);
