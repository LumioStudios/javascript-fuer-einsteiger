// Kapitel 11.3 – Werte mit Template Literals einsetzen
// Gehört zu: cafe.html

const hinweis = document.querySelector(".hinweis");
const schluss = 20;
const tag = new Date().toLocaleDateString("de-DE", {
  weekday: "long"
});

hinweis.textContent =
  `Heute (${tag}) geöffnet bis ${schluss} Uhr.`;
