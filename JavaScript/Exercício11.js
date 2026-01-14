//Exercício 11 
//Escrever um programa que verifica se uma pessoa pode votar com base na idade. 
//(Voto obrigatório para pessoas de 18 a 70 anos, 
//facultativo para pessoas com 16, 17 e acima de 70).

let idade = Number(prompt ("Digite sua idade"));
if (idade < 16) {
	console.log("Não pode votar!");
} else if (idade === 16 || idade === 17) {
	console.log("Pode votar, se quiser!");
} else if (idade >= 18 && idade <= 70) {
	console.log("Votar é obrigatório!");
} else {
	console.log("Pode votar, se quiser!")
}