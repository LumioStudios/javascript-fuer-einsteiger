// Kapitel 12.5 – Was im Event-Objekt steht
// Öffne 12-5-1_event-objekt.html im Browser.

const knopf = document.querySelector("#knopf");

knopf.addEventListener("click", (event) => {
  console.log(event.type);
  console.log(event.target.textContent);
  console.log(event.target === knopf);
});
