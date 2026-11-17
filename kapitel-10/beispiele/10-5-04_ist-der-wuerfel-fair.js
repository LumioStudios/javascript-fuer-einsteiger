// Kapitel 10.5: Zufallszahlen erzeugen
// Ist der Würfel fair?
// Ausführen im Ordner kapitel-10: node beispiele/10-5-04_ist-der-wuerfel-fair.js

function wuerfeln() {
  return Math.floor(Math.random() * 6) + 1;
}

const zaehler = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 6000; i++) {
  const augen = wuerfeln();
  zaehler[augen - 1]++;
}

console.log(zaehler);

// Ausgabe (Beispiel):
// [ 1013, 987, 1002, 978, 1024, 996 ]
