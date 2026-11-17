// 15.2 Wenn der Text kein gültiges JSON ist
// Ausführen: node 06-ungueltiges-json.js

function leseJson(text) {
  try {
    return JSON.parse(text);
  } catch (fehler) {
    console.error("Kein gültiges JSON:", text);
    return null;
  }
}

console.log(leseJson('{"stadt":"Köln"}'));
console.log(leseJson("kaputt"));

// Namen ohne Anführungszeichen sind kein JSON
console.log(leseJson("{name: 'Anna'}"));

// Ohne try und catch bricht das Programm hier ab:
// JSON.parse("Hallo");
