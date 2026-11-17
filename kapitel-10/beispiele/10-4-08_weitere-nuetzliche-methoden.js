// Kapitel 10.4: Das Math-Objekt
// Weitere nützliche Methoden
// Ausführen im Ordner kapitel-10: node beispiele/10-4-08_weitere-nuetzliche-methoden.js

function kreisFlaeche(radius) {
  return Math.PI * radius ** 2;
}

const flaeche = kreisFlaeche(3);

console.log(flaeche);
console.log(`Fläche: ${flaeche.toFixed(2)} cm²`);

// Ausgabe:
// 28.274333882308138
// Fläche: 28.27 cm²
