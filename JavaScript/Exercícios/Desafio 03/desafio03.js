
const botaoCalcular = document.getElementById('botao');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const imcSpan = document.getElementById('imc');
const statusSpan = document.getElementById('status');


function valorIMC(peso, altura){
    return (Number(peso)/(Number(altura) * Number(altura)));   
}

function valorStatus(status){
    if(status < 18.5){
        return "Abaixo do peso!";
    } else if(status < 25) {
        return "Peso normal!";
    } else if(status < 30){
        return "Acima do peso!";
    } else{
        return "Obesidade!";
    }
}

botaoCalcular.addEventListener('click', function(){
    let pesoUser = pesoInput.value
    let alturaUser = alturaInput.value

        if (!pesoUser || !alturaUser) {
    alert("Preencha peso e altura!");
    return;
}

if (Number(alturaUser) === 0) {
    alert("Altura inválida!");
    return;
}

    let imc = valorIMC(pesoUser, alturaUser)
    let statusIMC = valorStatus(imc)

   imcSpan.innerText = imc.toFixed(2)
    statusSpan.innerText = statusIMC
})