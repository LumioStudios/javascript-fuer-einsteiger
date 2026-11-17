// Würfelspiel: Wer zuerst drei Runden gewinnt

const zielSiege = 3;

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

// --- Spielablauf ---

function spieleRunde(name, stand) {
  stand.runde++;
  console.log(`--- Runde ${stand.runde} ---`);

  const wurfSpieler = werfeZweiWuerfel();
  const wurfComputer = werfeZweiWuerfel();
  stand.punkteGesamt += wurfSpieler.punkte;

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
  return stand.siegeSpieler >= zielSiege ||
    stand.siegeComputer >= zielSiege;
}

function zeigeStatistik(stand, startZeit) {
  const sekunden = Math.round(
    (new Date() - startZeit) / 1000
  );
  const schnitt = stand.punkteGesamt / stand.runde;
  const schnittText = schnitt.toLocaleString("de-DE", {
    maximumFractionDigits: 1
  });

  console.log("=== Statistik ===");
  console.log(`Gespielte Runden: ${stand.runde}`);
  console.log(`Deine Punkte pro Runde: ${schnittText}`);
  console.log(`Spieldauer: ${sekunden} Sekunden`);
}

// --- Start ---

function starteSpiel() {
  const name = bereinigeName(prompt("Wie heißt du?"));
  const startZeit = new Date();
  const uhrzeit = startZeit.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit"
  });

  console.log(`Hallo ${name}! Spielbeginn: ${uhrzeit} Uhr`);
  console.log(`Ziel: ${zielSiege} gewonnene Runden.`);

  const stand = {
    runde: 0,
    siegeSpieler: 0,
    siegeComputer: 0,
    punkteGesamt: 0
  };

  while (!istSpielVorbei(stand)) {
    const frage = `Runde ${stand.runde + 1}: Würfeln?`;
    if (!confirm(frage)) {
      console.log("Spiel abgebrochen.");
      break;
    }
    spieleRunde(name, stand);
  }

  if (stand.siegeSpieler >= zielSiege) {
    console.log(`Glückwunsch, ${name}! Du hast gewonnen.`);
  } else if (stand.siegeComputer >= zielSiege) {
    console.log("Der Computer hat gewonnen.");
  }

  if (stand.runde > 0) {
    zeigeStatistik(stand, startZeit);
  }
}

starteSpiel();
