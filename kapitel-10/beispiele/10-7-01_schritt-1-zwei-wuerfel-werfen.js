// Kapitel 10.7: Praxisbeispiel: Würfelspiel
// Schritt 1: Zwei Würfel werfen
// Ausführen im Ordner kapitel-10: node beispiele/10-7-01_schritt-1-zwei-wuerfel-werfen.js

function wuerfeln() {
  return Math.floor(Math.random() * 6) + 1;
}

function werfeZweiWuerfel() {
  const erster = wuerfeln();
  const zweiter = wuerfeln();
  const pasch = erster === zweiter;
  let punkte = erster + zweiter;

  if (pasch) {
    punkte *= 2;
  }

  return { erster, zweiter, pasch, punkte };
}

console.log(werfeZweiWuerfel());

// Ausgabe (Beispiel):
// { erster: 3, zweiter: 5, pasch: false, punkte: 8 }
