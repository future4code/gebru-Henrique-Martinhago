// Exercícios de interpretação de código //
/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
// R)   //

    //  2  //
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}  */
// a) Será impresso todos os numeros maior que 18     //
// b) Sim, pederia usar o numero da colocaçao no array   //

     // 3  //
      /* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}     */

//    Exercícios de escrita de código  //
let numberPet = Number(prompt(" Quantos bichinhos voce tem?"))
let numberPet1=numberPet
let namePet =[]
if (numberPet1 === 0){
  console.log("Que pena! Você pode adotar um pet!")
}else {
  while (numberPet1< namePet.length){
 let nomes=prompt("Diga o nome de um deles:");
 nomes= namePet;
 nomes ++
namePet.push([nomes]);
 } 
}
console.log ([namePet])

//  2 //

arrayOriginal=[10,20,30,15,18,5]
//a) 
function imprimirCadaUm (array){
for(let i = 0 ;i < arrayOriginal.length; i++ ){
  console.log(arrayOriginal[i])
} 
}
console.log(imprimirCadaUm(arrayOriginal))

//  b //