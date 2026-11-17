// Kapitel 11.2 – Wenn nichts gefunden wird
// Gehört zu: cafe.html

const fehlt = document.querySelector(".angebot");

console.log(fehlt);

const angebot = document.querySelector(".angebot");

if (angebot === null) {
  console.log("Kein Angebot auf der Seite.");
} else {
  console.log(angebot.textContent);
}
