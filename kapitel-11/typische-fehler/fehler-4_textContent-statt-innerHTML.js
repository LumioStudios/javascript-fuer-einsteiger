// Typischer Fehler 4: textContent statt innerHTML
// Gehört zu: ../cafe.html

const hinweis = document.querySelector(".hinweis");

hinweis.textContent = "Heute <b>Rabatt</b>!";
