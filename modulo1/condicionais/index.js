//Exercícios de interpretação de código//
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
// 1 a) ?
// b) numeros pares  //
// c) numeros impar //    */

// 2 //
/* let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break ; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}  
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)  
// a) Para mostrar o preço da fruta escolhido pelo usuario  //
// b) "O preço da fruta maçã é R$ 2.25"  //
// c) aparece o valor de DEFAULT :5  //  

// 3  // 
 const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)                   
// a) A primeira linha está perguntando ao usuario um numero. //
// b) se for n: 10 a mensagem sera q passou no teste, se for qualquer numero menor q 0 dara erro. 
// c) sim deu erro. a variavel (mensagem) esta declarada dentro do escopo local, e o cod p imprimir esta fora e nao encontra, fica como nao definido.   */

                // Exercícios de escrita de código  //
// 1) //
 const idade = Number (prompt("Qual sua idade?"))
if (idade =>18){
    console.log("Voce pode dirigir")
}else if (idade < 18){
    console.log("Voce nao pode dirigir")
}    

// 2)  //
 const periodoQueEstuda = prompt("Em qual periodo voce estuda? M (matutino), V (vespertino) , N ( noturno) ").toUpperCase
 if (periodoQueEstuda === "M" ){
     console,log("Bom dia")
 } else if (periodoQueEstuda === "V"){
     console.log("Boa tarde")
 } else if (periodoQueEstuda === "N"){
     console.log("Boa noite")
 }   

 // 3  //  
 const periodoQueEstuda = prompt("Em qual periodo voce estuda? M (matutino), V (vespertino) , N ( noturno) ")
  
 switch (periodoQueEstuda) {
     case "M":
     console.log( "Bom dia")
     break
     case "V":
     console.log("boa tarde")
     break
     case "N":
     console.log( " Boa noite") 
     break
     default :
     console.log("Bem vindo")
     break
 }               


 //  4  //
 const filme =prompt("Qual genero do filme que vai assistir?")==="fantasia"
 const precoDoIngresso = Number (prompt( "Qual valor do ingresso?"))<15
 if (filme&&precoDoIngresso){
   console.log("bom filme")
 }else {
   console.log("Escolha outro filme")
 }





