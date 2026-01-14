// Exercício 13
// Escrever um programa que calcula o IMC de uma pessoa e imprime uma mensagem
// indicando se a pessoa está abaixo do peso, com peso normal, acima do peso
// ou obesa. Deve-se criar uma função que receba o peso (em kg) e a altura
// (em metros) de uma pessoa, calcule o IMC e verifique em qual faixa o valor
// se encaixa. As faixas são: abaixo do peso (IMC < 18.5), peso normal
// (18.5 <= IMC < 25), sobrepeso (25 <= IMC < 30) e obesidade (IMC >= 30).

function IMC(peso, altura) {
  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    return "Abaixo do peso!";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal!";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do peso!";
  } else {
    return "Obesidade!";
  }
}

// Testes da função (um exemplo para cada condição)

IMC(41, 1.50);   // Abaixo do peso
IMC(80, 1.80);   // Peso normal
IMC(89, 1.80);   // Acima do peso
IMC(150, 1.90);  // Obesidade
