// Typischer Fehler 2 – Semikolon nach dem Schleifenkopf
// "Hallo" erscheint nur einmal statt dreimal.
for (let i = 1; i <= 3; i++); {
  console.log("Hallo");
}
