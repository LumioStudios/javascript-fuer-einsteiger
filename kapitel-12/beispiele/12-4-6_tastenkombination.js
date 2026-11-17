// Kapitel 12.4 – Tastenkombinationen
// Öffne 12-4-6_tastenkombination.html im Browser.

document.addEventListener("keydown", (event) => {
  const taste = event.key.toLowerCase();

  if (event.ctrlKey && taste === "m") {
    console.log("Strg + M gedrückt");
  }
});
