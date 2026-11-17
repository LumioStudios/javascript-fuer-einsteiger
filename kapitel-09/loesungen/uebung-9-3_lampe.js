// Kapitel 9 – Lösung zu Übung 9.3: Lampe
// Ausführen: node uebung-9-3_lampe.js

const lampe = {
  an: false,
  einschalten() {
    this.an = true;
  },
  ausschalten() {
    this.an = false;
  },
  umschalten() {
    this.an = !this.an;
  },
  zeigeStatus() {
    if (this.an) {
      console.log("Die Lampe ist an.");
    } else {
      console.log("Die Lampe ist aus.");
    }
  }
};

lampe.zeigeStatus();
lampe.einschalten();
lampe.zeigeStatus();
lampe.umschalten();
lampe.zeigeStatus();
lampe.umschalten();
lampe.zeigeStatus();
lampe.ausschalten();
lampe.zeigeStatus();

// Ausgabe:
// Die Lampe ist aus.
// Die Lampe ist an.
// Die Lampe ist aus.
// Die Lampe ist an.
// Die Lampe ist aus.
