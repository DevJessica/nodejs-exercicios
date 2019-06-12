//4 Faça um Programa com as 4 notas bimestrais e mostre a média.

let nota1 = Math.floor(Math.random() * 10);
let nota2 = Math.floor(Math.random() * 10);
let nota3 = Math.floor(Math.random() * 10);
let nota4 = Math.floor(Math.random() * 10);
let soma = nota1 + nota2 + nota3 + nota4;
let media = soma / 4;

console.log("A sua nota final e " ,media);