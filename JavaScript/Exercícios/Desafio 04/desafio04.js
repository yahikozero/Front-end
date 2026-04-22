const botaoReveal = document.getElementById('botao');
const revelado = document.getElementById('segredo');

let ativo = false;

botaoReveal.addEventListener('click', function(){
    ativo = !ativo;
    
    if(ativo){
        revelado.style.display = 'block';
    } else {
        revelado.style.display = 'none';
    }

});