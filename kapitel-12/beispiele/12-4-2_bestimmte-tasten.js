// Kapitel 12.4 – Auf bestimmte Tasten reagieren
// Öffne 12-4-2_bestimmte-tasten.html im Browser.

const titel = document.querySelector("#titel");

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    titel.classList.remove("an");
  } else if (event.key === "Enter") {
    titel.classList.add("an");
  }
});
