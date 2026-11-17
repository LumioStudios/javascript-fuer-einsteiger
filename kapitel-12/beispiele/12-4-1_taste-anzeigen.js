// Kapitel 12.4 – Gedrückte Taste anzeigen
// Öffne 12-4-1_taste-anzeigen.html im Browser.

const ausgabe = document.querySelector("#ausgabe");

document.addEventListener("keydown", (event) => {
  ausgabe.textContent = `Gedrückt: ${event.key}`;
});
