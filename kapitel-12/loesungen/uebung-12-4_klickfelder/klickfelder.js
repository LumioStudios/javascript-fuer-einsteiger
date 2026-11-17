const meldung = document.querySelector("#meldung");

// Teil 1: Rückfrage bei externen Links
document.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") {
    return;
  }

  const ziel = event.target.getAttribute("href");

  if (!ziel.startsWith("https://")) {
    return;
  }

  const ok = confirm("Diese Seite wirklich verlassen?");

  if (!ok) {
    event.preventDefault();
  }
});

// Teil 2 und 3: eigenes Kontextmenü
document.addEventListener("contextmenu", (event) => {
  if (event.shiftKey) {
    return;
  }

  event.preventDefault();

  const x = event.clientX;
  const y = event.clientY;
  meldung.textContent = `Rechtsklick bei ${x} / ${y}`;
});
