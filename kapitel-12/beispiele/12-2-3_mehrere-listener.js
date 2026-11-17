// Kapitel 12.2 – Mehrere Listener für ein Element
// Öffne 12-2-3_mehrere-listener.html im Browser.

const knopf = document.querySelector("#knopf");
const titel = document.querySelector("#titel");

knopf.addEventListener("click", () => {
  console.log("Erster Listener");
});

knopf.addEventListener("click", () => {
  titel.classList.toggle("an");
});
