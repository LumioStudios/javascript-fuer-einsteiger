// Kapitel 12.2 – Event-Listener wieder entfernen
// Öffne 12-2-4_listener-entfernen.html im Browser.

const knopf = document.querySelector("#knopf");
let klicks = 0;

function zaehleKlick() {
  klicks++;
  console.log(`Klick Nr. ${klicks}`);

  if (klicks === 3) {
    knopf.removeEventListener("click", zaehleKlick);
    console.log("Genug geklickt!");
  }
}

knopf.addEventListener("click", zaehleKlick);
