// Lösung zu Übung 3.4 – Fehlersuche

// 1. und 2.: Name darf nicht mit einer Ziffer beginnen
//            und muss zur Ausgabe unten passen
const spieler1 = "Lena";

// 3.: punkte nur einmal mit let anlegen
let punkte = 0;
punkte = 10;

// 4.: level ändert sich, also let statt const
let level = 1;
level = 2;

console.log("Spieler:", spieler1);
console.log("Punkte:", punkte, "Level:", level);
