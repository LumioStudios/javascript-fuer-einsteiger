// Typischer Fehler 1: Skript ohne defer
// Öffne fehler-1_ohne-defer.html und sieh in die
// Konsole: TypeError, weil h1 noch nicht existiert.

const titel = document.querySelector("#titel");

titel.textContent = "Café Mondschein";
