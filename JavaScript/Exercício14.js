// Exercício 14
// Escrever um programa que verifica se um ano é bissexto.
// Deve-se criar uma função que receba um ano como parâmetro
// e verifique se ele é bissexto ou não.
// Um ano é considerado bissexto se for divisível por 4,
// exceto os anos que são divisíveis por 100, a menos que
// também sejam divisíveis por 400.

function verifBissexto(ano) {
  if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
    return "O ano é bissexto!";
  } else {
    return "O ano não é bissexto!";
  }
}

// Testes da função

verifBissexto(2024); // O ano é bissexto!
verifBissexto(2001); // O ano não é bissexto!
verifBissexto(1900); // O ano não é bissexto!
verifBissexto(2000); // O ano é bissexto!
