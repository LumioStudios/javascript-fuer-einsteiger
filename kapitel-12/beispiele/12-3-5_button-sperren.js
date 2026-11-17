// Kapitel 12.3 – Buttons sperren mit disabled
// Öffne 12-3-5_button-sperren.html im Browser.

const knopf = document.querySelector("#knopf");
const ausgabe = document.querySelector("#ausgabe");

knopf.addEventListener("click", () => {
  knopf.disabled = true;
  ausgabe.textContent = "Danke für deine Stimme!";
});
