/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    console.log("Boas vindas ao jogo de BlackJack ")

    const inicioDeJogo = confirm("Quer iniciar uma nova rodada?")
      if ( inicioDeJogo=== false){
        console.log("O jogo acabou")
      }else if (inicioDeJogo ===true){
        const carta1Usuario = comprarCarta()
        const carta2Usuario = comprarCarta()
        const pontoUsuario = carta1Usuario.valor + carta2Usuario.valor
        const resultUsuario =`Usuario - Cartas : ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${pontoUsuario}`
    
        const carta1Computador= comprarCarta()
        const carta2Computador = comprarCarta ()
        const pontoComputador = carta1Computador.valor+ carta2Computador.valor
        const resultComputador = ` Computador - Cartas : ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${pontoComputador}`
        console.log(resultUsuario)
        console.log(resultComputador)
        if (resultUsuario>resultComputador){
            console.log("Usuario ganhou")
        } else if( pontoComputador>pontoYsuario){
            console.log("Computador ganhou")
        }else{
            console.log("EMPATE!")
        }
      }