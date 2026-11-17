// Kapitel 11.4 – CSS-Klassen mit classList
// Gehört zu: cafe.html

const kuchen = document.querySelector(".kuchen");

kuchen.classList.add("ausverkauft");
console.log(kuchen.className);
console.log(kuchen.classList.contains("kuchen"));

kuchen.classList.remove("ausverkauft");
console.log(kuchen.className);
