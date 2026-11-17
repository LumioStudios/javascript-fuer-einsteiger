// Fehler 5: Element nicht gefunden
// Öffne 05-element-nicht-gefunden.html und drücke F12.

const titel = document.querySelector("titel");
titel.textContent = "Willkommen";

// Lösung: Das # für die ID fehlt.
// const titel = document.querySelector("#titel");
