// Kapitel 12.4 – Groß- und Kleinschreibung
// Öffne 12-4-4_gross-klein.html im Browser.

document.addEventListener("keydown", (event) => {
  const taste = event.key.toLowerCase();

  if (taste === "h") {
    console.log("Hilfe: Pfeiltasten bewegen.");
  }
});
