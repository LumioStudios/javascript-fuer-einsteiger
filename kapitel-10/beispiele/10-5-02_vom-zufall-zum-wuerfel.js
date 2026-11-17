// Kapitel 10.5: Zufallszahlen erzeugen
// Vom Zufall zum Würfel
// Ausführen im Ordner kapitel-10: node beispiele/10-5-02_vom-zufall-zum-wuerfel.js

function wuerfeln() {
  return Math.floor(Math.random() * 6) + 1;
}

for (let i = 1; i <= 5; i++) {
  console.log(`Wurf ${i}: ${wuerfeln()}`);
}

// Ausgabe (Beispiel):
// Wurf 1: 4
// Wurf 2: 1
// Wurf 3: 6
// Wurf 4: 4
// Wurf 5: 2
