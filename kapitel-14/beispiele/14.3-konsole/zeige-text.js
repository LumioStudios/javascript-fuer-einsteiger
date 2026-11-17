// Kapitel 14.3 – eigene Meldungen mit console.error
// Öffne zeige-text.html und drücke F12.

function zeigeText(selektor, text) {
  const element = document.querySelector(selektor);

  if (element === null) {
    console.error(`Nicht gefunden: ${selektor}`);
    return;
  }
  element.textContent = text;
}

zeigeText("#ausgabe", "Das klappt.");
zeigeText("#ausgbe", "Das klappt nicht.");
