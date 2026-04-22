let botao = document.getElementById("botao");
let mensagem = document.getElementById("mensagem");

let ativo = false

botao.addEventListener("click", function(){
	ativo = !ativo;

	if (ativo) {
		mensagem.innerText = "O meu na tua mão! :D";
	} else {
		mensagem.innerText = "Clique no botão!";
		
	}

});