// Kapitel 12.5 – Ein Listener für mehrere Elemente
// Öffne 12-5-2_ein-listener.html im Browser.

const titel = document.querySelector("#titel");
const knopf = document.querySelector("#knopf");

function melde(event) {
  console.log(`${event.type} bei ${event.target.id}`);
}

titel.addEventListener("click", melde);
knopf.addEventListener("click", melde);
titel.addEventListener("dblclick", melde);
