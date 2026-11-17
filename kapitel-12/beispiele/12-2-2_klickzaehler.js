// Kapitel 12.2 – Arrow Function als Event-Listener
// Öffne 12-2-2_klickzaehler.html im Browser.

const knopf = document.querySelector("#knopf");
const ausgabe = document.querySelector("#ausgabe");
let klicks = 0;

knopf.addEventListener("click", () => {
  klicks++;
  ausgabe.textContent = `Du hast ${klicks}-mal geklickt.`;
});
