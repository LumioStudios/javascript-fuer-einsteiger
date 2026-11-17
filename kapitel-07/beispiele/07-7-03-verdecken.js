// Kapitel 7, Abschnitt 7.7: Gleiche Namen innen und außen

const nachricht = "global";

function zeigeNachricht() {
  const nachricht = "lokal";
  console.log(nachricht);
}

zeigeNachricht();
console.log(nachricht);
