// Typischer Fehler 1 – Ein Durchlauf zu wenig
// Die 5 fehlt, weil 5 < 5 falsch ist. Richtig: i <= 5
for (let i = 1; i < 5; i++) {
  console.log(i);
}
