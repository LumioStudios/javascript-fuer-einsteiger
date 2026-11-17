// Kapitel 12.5 – Wohin geklickt wurde
// Öffne 12-5-3_klickposition.html im Browser.

document.addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`Klick bei x = ${x}, y = ${y}`);
});
