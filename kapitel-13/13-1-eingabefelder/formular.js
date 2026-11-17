// Kapitel 13.1 – Eingabefelder auslesen
// Tippe in die Felder und beobachte Seite und Konsole.
// In der Konsole kannst du jederzeit nachsehen:
//   document.querySelector("#vorname").value;

const vornameFeld = document.querySelector("#vorname");
const alterFeld = document.querySelector("#alter");
const ausgabe = document.querySelector("#ausgabe");

// Live mitlesen mit dem input-Event
vornameFeld.addEventListener("input", () => {
  const name = vornameFeld.value.trim();
  ausgabe.textContent = `Hallo, ${name}!`;
});

// value ist immer ein String:
// erst umwandeln, dann rechnen
alterFeld.addEventListener("input", () => {
  const text = alterFeld.value;
  console.log(text, typeof text);
  console.log(`Ohne Number: ${text + 10}`);

  const alter = Number(text);
  console.log(`In 10 Jahren: ${alter + 10}`);
});

// Cursor beim Laden ins erste Feld setzen
vornameFeld.focus();
