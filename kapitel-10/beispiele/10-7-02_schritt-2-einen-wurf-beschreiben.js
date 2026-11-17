// Kapitel 10.7: Praxisbeispiel: Würfelspiel
// Schritt 2: Einen Wurf beschreiben
// Ausführen im Ordner kapitel-10: node beispiele/10-7-02_schritt-2-einen-wurf-beschreiben.js

function beschreibeWurf(name, wurf) {
  const augen = `${wurf.erster} und ${wurf.zweiter}`;
  const extra = wurf.pasch ? " – Pasch!" : "";

  return `${name} würfelt ${augen}: ` +
    `${wurf.punkte} Punkte${extra}`;
}

const wurf = {
  erster: 4, zweiter: 4, pasch: true, punkte: 16
};

console.log(beschreibeWurf("Anna", wurf));

// Ausgabe:
// Anna würfelt 4 und 4: 16 Punkte – Pasch!
