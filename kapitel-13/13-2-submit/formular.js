// Kapitel 13.2 – Das submit-Event
// Schicke das Formular per Button oder mit Enter ab.

const formular = document.querySelector("#formular");
const vornameFeld = document.querySelector("#vorname");
const ausgabe = document.querySelector("#ausgabe");

formular.addEventListener("submit", (event) => {
  // Neuladen der Seite verhindern – immer zuerst
  event.preventDefault();

  const name = vornameFeld.value.trim();
  ausgabe.textContent = `Danke, ${name}!`;

  // Formular leeren und Cursor zurück ins erste Feld
  formular.reset();
  vornameFeld.focus();
});
