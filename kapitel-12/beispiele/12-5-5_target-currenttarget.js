// Kapitel 12.5 – target und currentTarget
// Öffne 12-5-5_target-currenttarget.html im Browser.

const liste = document.querySelector("#farben");

liste.addEventListener("click", (event) => {
  console.log(`target: ${event.target.tagName}`);
  console.log(`currentTarget: ${event.currentTarget.id}`);
});
