// Exercício 10
// Escreva um programa que calcule a média de um aluno.
// Se a média for maior ou igual a 7, imprima "Aprovado".
// Caso contrário, imprima "Reprovado".

let primeiraNota = Number(prompt("Digite a primeira nota"));
let segundaNota = Number(prompt("Digite a segunda nota"));

if (isNaN(primeiraNota) || isNaN(segundaNota)) {
  console.log("Valor inválido, insira um valor numérico!");
} else {
  let media = (primeiraNota + segundaNota) / 2;

  if (media >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}
