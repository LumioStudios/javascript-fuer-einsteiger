const maximum = 140;
const warnGrenze = 120;

const formular = document.querySelector("#formular");
const textFeld = document.querySelector("#text");
const zaehler = document.querySelector("#zaehler");
const sendenKnopf = document.querySelector("#senden");
const liste = document.querySelector("#nachrichten");

function aktualisiereZaehler() {
  const anzahl = textFeld.value.length;
  const zuViel = anzahl > maximum;
  const knapp = anzahl > warnGrenze && !zuViel;
  const leer = textFeld.value.trim() === "";

  zaehler.textContent = `${anzahl} / ${maximum}`;
  zaehler.classList.toggle("warnung", knapp);
  zaehler.classList.toggle("zuviel", zuViel);

  sendenKnopf.disabled = leer || zuViel;
}

textFeld.addEventListener("input", aktualisiereZaehler);

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = textFeld.value.trim();

  // Sicherheitsnetz, falls der Button doch aktiv war
  if (text === "" || text.length > maximum) {
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;
  liste.prepend(li);

  formular.reset();
  aktualisiereZaehler();
  textFeld.focus();
});

aktualisiereZaehler();
