// Kapitel 12.6 – Strg + S abfangen
// Öffne 12-6-4_strg-s.html im Browser.

document.addEventListener("keydown", (event) => {
  const taste = event.key.toLowerCase();

  if (event.ctrlKey && taste === "s") {
    event.preventDefault();
    console.log("Gespeichert! (vorerst nur zum Schein)");
  }
});
