// Kapitel 12.6 – Einen Link aufhalten
// Öffne 12-6-1_link-aufhalten.html im Browser.

const link = document.querySelector("#link");

link.addEventListener("click", (event) => {
  const ok = confirm("Diese Seite wirklich verlassen?");

  if (!ok) {
    event.preventDefault();
  }
});
