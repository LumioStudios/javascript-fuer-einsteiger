// Kapitel 12.3 – Doppelklick
// Öffne 12-3-3_doppelklick.html im Browser.

const titel = document.querySelector("#titel");

titel.addEventListener("dblclick", () => {
  titel.textContent = "Doppelt hält besser!";
});
