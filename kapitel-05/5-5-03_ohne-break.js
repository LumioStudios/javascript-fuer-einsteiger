// Kapitel 5.5 – Was passiert ohne break?
// JavaScript "fällt" in die folgenden Fälle durch.

const farbe = "gelb";

switch (farbe) {
  case "rot":
    console.log("Stehen bleiben");
  case "gelb":
    console.log("Warten");
  case "gruen":
    console.log("Gehen");
}
