// Kapitel 11.5 – Viele Elemente aus einem Array
// Gehört zu: cafe.html

function erstelleEintrag(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}

const karte = document.querySelector("#karte");
const neueSorten = ["Kakao", "Chai", "Limonade"];

for (const sorte of neueSorten) {
  karte.append(erstelleEintrag(sorte));
}

console.log(karte.children.length);
