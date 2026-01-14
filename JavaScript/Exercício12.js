// Exercício 12
// Escrever um programa em JavaScript que verifica a situação de um estudante
// de acordo com sua média final. O programa deve conter uma função que receba
// a média final de um estudante como parâmetro e retorne sua situação.
// Caso a média seja igual ou superior a 7, o estudante deve ser considerado
// aprovado. Caso a média esteja entre 5 e 6.9, o estudante deve ficar em
// recuperação. Caso a média seja inferior a 5, o estudante deve ser
// considerado reprovado.


function verifMedia(media) {
	if (media >= 5 && media < 7) {
		return "Recuperação";
	} else if (media >= 7) {
		return "Aprovado";
	} else {
		return "Reprovado";
	}
}

verifMedia(7)     // "Aprovado"
verifMedia(4)     // "Reprovado"
verifMedia(6.2)   // "Recuperação"