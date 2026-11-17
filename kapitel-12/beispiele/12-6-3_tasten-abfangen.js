// Kapitel 12.6 – Tasten abfangen
// Öffne 12-6-3_tasten-abfangen.html im Browser.

document.addEventListener("keydown", (event) => {
  const steuerTasten = ["ArrowUp", "ArrowDown", " "];

  if (steuerTasten.includes(event.key)) {
    event.preventDefault();
    console.log(`Steuerung: "${event.key}"`);
  }
});
