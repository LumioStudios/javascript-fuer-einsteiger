// Lösung zu Übung 10.5 – Würfelspiel erweitern
// Läuft im Browser: uebung-10-5_wuerfelspiel.html öffnen

// Würfelspiel mit Ziel-Abfrage und erweiterter Statistik

// --- Würfeln ---

function wuerfeln() {
  return Math.floor(Math.random() * 6) + 1;
}

function werfeZweiWuerfel() {
  const erster = wuerfeln();
  const zweiter = wuerfeln();
  const pasch = erster === zweiter;
  let punkte = erster + zweiter;

  if (pasch) {
    punkte *= 2;
  }

  return { erster, zweiter, pasch, punkte };
}

// --- Texte ---

function beschreibeWurf(name, wurf) {
  const augen = `${wurf.erster} und ${wurf.zweiter}`;
  const extra = wurf.pasch ? " – Pasch!" : "";

  return `${name} würfelt ${augen}: ` +
    `${wurf.punkte} Punkte${extra}`;
}

function bereinigeName(eingabe) {
  if (eingabe === null || eingabe.trim() === "") {
    return "Spieler";
  }

  const name = eingabe.trim().toLowerCase();
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}

function frageZielSiege() {
  const eingabe = prompt("Auf wie viele Siege? (1 bis 10)");
  const zahl = Math.trunc(Number(eingabe));

  if (Number.isNaN(zahl) || zahl < 1 || zahl > 10) {
    return 3;
  }

  return zahl;
}

// --- Spielablauf ---

function spieleRunde(name, stand) {
  stand.runde++;
  console.log(`--- Runde ${stand.runde} ---`);

  const wurfSpieler = werfeZweiWuerfel();
  const wurfComputer = werfeZweiWuerfel();
  stand.punkteGesamt += wurfSpieler.punkte;

  // Neu: Päsche zählen, besten Wurf merken
  if (wurfSpieler.pasch) {
    stand.paesche++;
  }
  stand.besterWurf = Math.max(
    stand.besterWurf, wurfSpieler.punkte
  );

  console.log(beschreibeWurf(name, wurfSpieler));
  console.log(beschreibeWurf("Computer", wurfComputer));

  if (wurfSpieler.punkte > wurfComputer.punkte) {
    stand.siegeSpieler++;
    console.log(`${name} gewinnt die Runde.`);
  } else if (wurfSpieler.punkte < wurfComputer.punkte) {
    stand.siegeComputer++;
    console.log("Der Computer gewinnt die Runde.");
  } else {
    console.log("Unentschieden!");
  }

  console.log(
    `Stand: ${stand.siegeSpieler}:${stand.siegeComputer}`
  );
}

function istSpielVorbei(stand) {
  return stand.siegeSpieler >= stand.zielSiege ||
    stand.siegeComputer >= stand.zielSiege;
}

function zeigeStatistik(stand, startZeit) {
  const ende = new Date();
  const sekunden = Math.round((ende - startZeit) / 1000);
  const schnitt = stand.punkteGesamt / stand.runde;
  const schnittText = schnitt.toLocaleString("de-DE", {
    maximumFractionDigits: 1
  });
  const datum = ende.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const uhrzeit = ende.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit"
  });

  console.log("=== Statistik ===");
  console.log(`Gespielte Runden: ${stand.runde}`);
  console.log(`Deine Punkte pro Runde: ${schnittText}`);
  console.log(`Deine Päsche: ${stand.paesche}`);
  console.log(`Bester Wurf: ${stand.besterWurf} Punkte`);
  console.log(`Spieldauer: ${sekunden} Sekunden`);
  console.log(`Spielende: ${datum}, ${uhrzeit} Uhr`);
}

// --- Start ---

function starteSpiel() {
  const name = bereinigeName(prompt("Wie heißt du?"));
  const stand = {
    zielSiege: frageZielSiege(),
    runde: 0,
    siegeSpieler: 0,
    siegeComputer: 0,
    punkteGesamt: 0,
    paesche: 0,
    besterWurf: 0
  };
  const startZeit = new Date();
  const uhrzeit = startZeit.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit"
  });

  console.log(`Hallo ${name}! Spielbeginn: ${uhrzeit} Uhr`);
  console.log(`Ziel: ${stand.zielSiege} gewonnene Runden.`);

  while (!istSpielVorbei(stand)) {
    const frage = `Runde ${stand.runde + 1}: Würfeln?`;
    if (!confirm(frage)) {
      console.log("Spiel abgebrochen.");
      break;
    }
    spieleRunde(name, stand);
  }

  if (stand.siegeSpieler >= stand.zielSiege) {
    console.log(`Glückwunsch, ${name}! Du hast gewonnen.`);
  } else if (stand.siegeComputer >= stand.zielSiege) {
    console.log("Der Computer hat gewonnen.");
  }

  if (stand.runde > 0) {
    zeigeStatistik(stand, startZeit);
  }
}

starteSpiel();
