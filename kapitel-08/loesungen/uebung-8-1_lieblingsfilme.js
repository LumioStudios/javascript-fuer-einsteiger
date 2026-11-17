// Lösung zu Übung 8.1 – Lieblingsfilme

const lieblingsfilme = [
  "Zurück in die Zukunft",
  "Das Boot",
  "Lola rennt",
  "Good Bye, Lenin!"
];

// 1. Erster und letzter Film
const letzterIndex = lieblingsfilme.length - 1;
console.log("Erster:", lieblingsfilme[0]);
console.log("Letzter:", lieblingsfilme[letzterIndex]);

// 2. Zweiten Film ersetzen
lieblingsfilme[1] = "Die Welle";

// 3. Fünften Film anhängen
lieblingsfilme.push("Toni Erdmann");
console.log("Anzahl:", lieblingsfilme.length);

// 4. Nummerierte Liste
for (let i = 0; i < lieblingsfilme.length; i++) {
  console.log((i + 1) + ". " + lieblingsfilme[i]);
}
