// Kapitel 11.5 – Ein Element nach einem anderen einfügen
// Gehört zu: cafe.html

const hinweis = document.querySelector(".hinweis");
const extra = document.createElement("p");

extra.textContent = "Neu: Kuchen auch zum Mitnehmen!";
hinweis.after(extra);
