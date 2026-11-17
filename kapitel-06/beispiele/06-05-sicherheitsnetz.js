// Kapitel 6.5 – Ein Sicherheitsnetz einbauen
let zahl = 1;
let runden = 0;

while (zahl < 1000 && runden < 100) {
  zahl = zahl * 2;
  runden++;
}

console.log("Zahl:", zahl);
console.log("Runden:", runden);
