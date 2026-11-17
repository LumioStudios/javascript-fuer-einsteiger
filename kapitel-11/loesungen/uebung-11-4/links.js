const links = document.querySelectorAll("a");
let extern = 0;
let intern = 0;

for (const link of links) {
  const ziel = link.getAttribute("href");

  if (ziel.startsWith("https://")) {
    link.setAttribute("target", "_blank");
    link.classList.add("extern");
    link.textContent += " ↗";
    extern++;
  } else {
    intern++;
  }
}

console.log(`Externe Links: ${extern}`);
console.log(`Interne Links: ${intern}`);
