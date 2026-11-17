// Kapitel 8.5 – Arrays durchlaufen mit for und for…of

const temperaturen = [3, -2, 5, -7, 0, -1];
const frosttage = [];

for (const grad of temperaturen) {
  if (grad < 0) {
    frosttage.push(grad);
  }
}

console.log(frosttage);
console.log("Frosttage:", frosttage.length);
