// Kapitel 10.5: Zufallszahlen erzeugen
// Zufällig auswählen
// Ausführen im Ordner kapitel-10: node beispiele/10-5-05_zufaellig-auswaehlen.js

const tipps = [
  "Trink genug Wasser.",
  "Mach eine kurze Pause.",
  "Speichere deine Datei."
];

const index = Math.floor(Math.random() * tipps.length);

console.log(`Tipp des Tages: ${tipps[index]}`);

// Ausgabe (Beispiel):
// Tipp des Tages: Mach eine kurze Pause.
