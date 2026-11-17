// Kapitel 12.6 – Das Kontextmenü ersetzen
// Öffne 12-6-2_kontextmenue.html im Browser.

const titel = document.querySelector("#titel");
const ausgabe = document.querySelector("#ausgabe");

titel.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  ausgabe.textContent = "Rechtsklick auf die Überschrift!";
});
