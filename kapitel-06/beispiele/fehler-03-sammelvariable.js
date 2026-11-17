// Typischer Fehler 3 – Sammelvariable in der Schleife
// summe wird bei jedem Durchlauf neu auf 0 gesetzt.
// Richtig: let summe = 0; vor die Schleife schreiben.
for (let i = 1; i <= 3; i++) {
  let summe = 0;
  summe += i;
  console.log("Summe:", summe);
}
