// Kapitel 12.5 – Events steigen auf
// Öffne 12-5-4_bubbling.html im Browser.

const liste = document.querySelector("#farben");

liste.addEventListener("click", () => {
  console.log("Klick in der Liste!");
});
