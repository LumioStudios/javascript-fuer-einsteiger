// Kapitel 14.5 – ein erstes Beispiel
// Der Selektor enthält ABSICHTLICH einen Tippfehler.
// Öffne try-catch.html und drücke F12.

const element = document.querySelector("#ausgbe");

try {
  element.textContent = "Hallo!";
  console.log("Text gesetzt.");
} catch (fehler) {
  console.log("Es gab ein Problem:");
  console.log(fehler.name);
  console.log(fehler.message);
}

console.log("Das Programm läuft weiter.");
