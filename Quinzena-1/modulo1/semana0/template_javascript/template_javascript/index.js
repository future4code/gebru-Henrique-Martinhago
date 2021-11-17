// Interpretaçao de codigo//
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log ( " a. ", resultado)
// será impresso "a. seguido de false "

resultado = bool1 && bool2 && bool3
console.log ("b. ", resultado)
// será impresso que "b é false"

resultado = !resultado && (bool1 || bool2)
console.log ("c. ", resultado)
//  será impresso que "c é true"

console.log ("d. ", typeof resultado)
// booleano//

let primeiroNumero = prompt("digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero
// teria que transformar a variavel stirng em number//

console.log (soma) 

//solução//

let primeiroNumero =Number(prompt("digite um numero!"))
let segundoNumero =Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

// EXERCICIO DE ESCRITA DE CODIGO//
  // 1 //
  let minhaIdade= Number(prompt("Qual sua idade?"))
  let idadeAmigo= Number(prompt("Qual a idade do seu melhor amigo?"))
  let resultado = minhaIdade <= idadeAmigo
  let diferencaDeIdade = minhaIdade - idadeAmigo
  
  console.log("Sua idade é maior do que a do seu melhor amigo?",resultado)
  console.log("A diferençã de idade é de ", diferencaDeIdade )

   // 2 //
   let numeroPar = prompt("Insira um numero par")
   let restoDivisao = numeroPar % 2
   console.log (restoDivisao) 

   // 3 //
   const anoIdade = prompt("Quantos anos voce tem ?")
   console.log ("voce tem", anoIdade *12,"meses")
   console.log ("voce tem", anoIdade *12*365 ,"dias" )
   console.log ("voce tem", anoIdade *12*365*24,"horas") 

   // 4 //

     const num1=Number(prompt("diga um numero!"))
     const num2=Number(prompt("diga outro numero!"))

     console.log ("num1 maior que num2!",num1>num2)
     console.log ("O primeiro numero é igual ao segundo?",num1===num2)
     



   

  // Desafio //
//1 //

 //  A //  77ºF em Kelvin//
 /*const kelvin = (77-32)*(5/9)+273.15 
console.log("77ºF é", kelvin )

//  B // 80cº em Fº
const fahrenheit = (80*9/5)+32
console.log("80cº é", fahrenheit ) 

//  C  // 30Cº em ºF e K.
const celsius = (30*9/5)+32 
console.log(" 30cº em F =", celsius)

//  D  // 
let usuario = pronpt ("Diga a temperatura em Cº!")

 // 2  //
//  A //
const energia =280*0.05
console.log = ("valor a ser pago será de:", energia)