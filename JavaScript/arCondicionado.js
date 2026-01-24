let  ligadoEnergia = true
let temperatura = 26
let janelaAberta = true

if(ligadoEnergia && temperatura > 25 && !janelaAberta){
    console.log('Pode ligar o ar-condicionado')
} else {
    console.log('Não pode ligar o ar-condicionado!')
}
