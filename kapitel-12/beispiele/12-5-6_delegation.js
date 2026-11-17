// Kapitel 12.5 – Event-Delegation
// Öffne 12-5-6_delegation.html im Browser.

const liste = document.querySelector("#farben");

liste.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("an");
  }
});
