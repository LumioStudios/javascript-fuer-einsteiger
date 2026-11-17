// Lösung zu Übung 6.3 – Die Seerose
let tag = 1;
let flaeche = 1;

console.log("Tag", tag + ":", flaeche, "m²");

// Verdoppeln, bis der Teich voll ist
while (flaeche < 5000 && tag < 100) {
  tag++;
  flaeche *= 2;
  console.log("Tag", tag + ":", flaeche, "m²");
}

console.log("Der Teich ist nach", tag, "Tagen bedeckt.");
