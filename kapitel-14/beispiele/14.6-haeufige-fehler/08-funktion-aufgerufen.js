// Fehler 8: Funktion aufrufen statt übergeben
// Öffne 08-funktion-aufgerufen.html und drücke F12.

const button = document.querySelector("#zaehlen");

function zaehle() {
  console.log("Geklickt!");
}

button.addEventListener("click", zaehle());

// Lösung: ohne Klammern übergeben
// button.addEventListener("click", zaehle);
