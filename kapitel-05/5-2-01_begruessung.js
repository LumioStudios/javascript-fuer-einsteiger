// Kapitel 5.2 – else if
// Teste mit stunde = 9, 14 und 21.

const stunde = 14;

if (stunde < 12) {
  console.log("Guten Morgen!");
} else if (stunde < 18) {
  console.log("Guten Tag!");
} else {
  console.log("Guten Abend!");
}
