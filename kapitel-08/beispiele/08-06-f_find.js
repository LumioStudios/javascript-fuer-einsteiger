// Kapitel 8.6 – Suchen: includes, indexOf, find

const preise = [2.99, 0.79, 5.49, 1.29, 7.99];

const teuer = preise.find((preis) => preis > 5);

console.log(teuer);
