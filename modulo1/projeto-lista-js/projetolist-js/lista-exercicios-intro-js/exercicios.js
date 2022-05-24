// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const alturaRetangulo = prompt("Digite a altura da area")
const larguraRetangulo= prompt(" Digite largura da area ")
const retangulo = alturaRetangulo * larguraRetangulo

console.log ( retangulo )
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt ( " Em que ano estamos ?")
const anoNascimento = prompt ( " Em que ano voce nasceu?")
const userIdade = anoAtual - anoNascimento
    
console.log ( userIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

const imc = peso / (altura * altura) 

return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt (" Qual seu nome ?")
const idade = prompt (" Qual sua idade? ")
const email = prompt (" Qual seu email?")
console.log ( `Ola Meu nome é ${nome}  tenho  ${idade} anos,e o meu email é ${ email}`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let coresList = []
  const cor1 = prompt("Qual sua cor favorita?")
  const cor2 = prompt("Qual sua segunda cor favorita?")
  const cor3 = prompt(" Diga outra cor ")
  coresList.push(cor1,cor2,cor3)
  console.log  (coresList)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const frase= " labenu é massa"
  return frase.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const vendaIngresso = custo / valorIngresso
  return vendaIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const frase1 = string1.length
  const frase2 = string2.length
  const verificar = frase1 === frase2
  return verificar
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultimoElemento= array[array.length - 1]
return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}