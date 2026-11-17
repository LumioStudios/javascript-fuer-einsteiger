// Kapitel 12.2 – Der erste Event-Listener
// Öffne 12-2-1_erster-listener.html im Browser.

const knopf = document.querySelector("#knopf");

function begruesse() {
  console.log("Hallo! Du hast geklickt.");
}

knopf.addEventListener("click", begruesse);
