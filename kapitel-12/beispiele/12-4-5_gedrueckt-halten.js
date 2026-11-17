// Kapitel 12.4 – Gedrückt halten mit event.repeat
// Öffne 12-4-5_gedrueckt-halten.html im Browser.

let anschlaege = 0;

document.addEventListener("keydown", (event) => {
  if (event.repeat) {
    return;
  }

  anschlaege++;
  console.log(`Anschlag Nr. ${anschlaege}: ${event.key}`);
});
