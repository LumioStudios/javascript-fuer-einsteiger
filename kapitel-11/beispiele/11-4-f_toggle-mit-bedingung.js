// Kapitel 11.4 – toggle mit Bedingung
// Gehört zu: cafe.html

const kuchen = document.querySelector(".kuchen");
const vorrat = 0;

kuchen.classList.toggle("ausverkauft", vorrat === 0);
