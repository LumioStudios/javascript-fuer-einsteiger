// Lösung zu Übung 6.5 – Sternchen-Treppe
const hoehe = 4;

// Die Treppe
for (let zeile = 1; zeile <= hoehe; zeile++) {
  let text = "";

  for (let i = 1; i <= zeile; i++) {
    text += "*";
  }

  console.log(text);
}

// Die umgedrehte Treppe
for (let zeile = hoehe; zeile >= 1; zeile--) {
  let text = "";

  for (let i = 1; i <= zeile; i++) {
    text += "*";
  }

  console.log(text);
}
