// Lösung zu Kapitel 7, Übung 7.1 – Die Visitenkarte

function zeigeLinie() {
  console.log("====================");
}

function zeigeVisitenkarte(
  name,
  beruf,
  stadt = "unbekannt"
) {
  zeigeLinie();
  console.log("Name:  " + name);
  console.log("Beruf: " + beruf);
  console.log("Stadt: " + stadt);
  zeigeLinie();
}

zeigeVisitenkarte("Lena Berger", "Gärtnerin", "Köln");
zeigeVisitenkarte("Tom Weber", "Koch");
