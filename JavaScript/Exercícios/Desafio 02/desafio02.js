let nome = document.getElementById("nome");
let botao = document.getElementById("botao");
let mensagem = document.getElementById("mensagem");


botao.addEventListener("click", function(){
   let valorNome = nome.value.trim(); //trim() remove espaço no inicio e final do texto, caso usuário digite apenas espaços
    if(valorNome){
        mensagem.innerText = "Olá, " + valorNome;
    } else {
        mensagem.innerText = "Digite um nome!";
    }
})