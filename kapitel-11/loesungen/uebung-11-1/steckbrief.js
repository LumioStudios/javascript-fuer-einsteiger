const person = {
  name: "Anna",
  alter: 34,
  stadt: "Köln",
  hobby: "Klettern"
};

// Elemente einmal suchen und merken
const ueberschrift = document.querySelector("h1");
const alterElement = document.querySelector(".alter");
const stadtElement = document.querySelector(".stadt");
const hobbyElement = document.querySelector(".hobby");

// Seite mit den Daten füllen
ueberschrift.textContent = `Steckbrief: ${person.name}`;
alterElement.textContent = `Alter: ${person.alter} Jahre`;
stadtElement.textContent = `Wohnort: ${person.stadt}`;
hobbyElement.textContent = `Hobby: ${person.hobby}`;

document.title = `Steckbrief von ${person.name}`;
