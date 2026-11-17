const schluessel = "begruessung-name";

const nameFeld = document.querySelector("#name");
const merken = document.querySelector("#merken");
const vergessen = document.querySelector("#vergessen");
const begruessung = document.querySelector("#begruessung");

function zeigeBegruessung() {
  const name = localStorage.getItem(schluessel);

  if (name === null) {
    begruessung.textContent = "Hallo! Wie heißt du?";
  } else {
    begruessung.textContent = `Hallo, ${name}!`;
  }
}

merken.addEventListener("click", () => {
  const name = nameFeld.value.trim();

  if (name === "") {
    return;
  }

  localStorage.setItem(schluessel, name);
  nameFeld.value = "";
  zeigeBegruessung();
});

vergessen.addEventListener("click", () => {
  localStorage.removeItem(schluessel);
  zeigeBegruessung();
});

// Beim Laden der Seite sofort begrüßen
zeigeBegruessung();
