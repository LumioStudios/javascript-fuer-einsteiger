// Kapitel 12.3 – Ein Button, der umschaltet
// Öffne 12-3-1_umschalten.html im Browser.

const knopf = document.querySelector("#knopf");
const titel = document.querySelector("#titel");

knopf.addEventListener("click", () => {
  titel.classList.toggle("an");

  if (titel.classList.contains("an")) {
    knopf.textContent = "Ausschalten";
  } else {
    knopf.textContent = "Einschalten";
  }
});
