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
  const altura = Number (prompt("diga uma altura"))
  const largura = Number (prompt("diga medida largura"))
  return altura*largura
}
console.log = (calculaAreaRetangulo())

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Diga o ano atual"))
  const nascimento = Number (prompt("Diga seu ano de nascimento"))
  const idade = anoAtual - nascimento
}
  console.log = (imprimeIdade())



// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const peso = 80
  const altura = 1.8
  const IMC = (peso/(altura*altura))
  return calculaIMC(peso,altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt ("Qual seu nome?")
  let idade = Number(prompt ("Qual sua idade?"))
  let email = prompt ("Qual seu email?")

  console.log = ("Meu nome é",nome,"tenho",idade,"anos,e o meu email é:",email)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cores1 =prompt("Qual sua  cor favorita?")
  let cores2 =prompt("outra cor favorita?")
  let cores3 =prompt("Terceira cor favorita?")
  const todasAsCores = [cores1, cores2, cores3]
  console.log = (imprimeTresCoresFavoritas())

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let mensagem ="bom dia"
  return retornaPrimeiroElemento.toUpperCase(string)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const custo = "5000"
  const valorIngresso = "250"
  const vendas = custo / valorIngresso
  return calculaAreaRetangulo(custo, valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const checarTamanho = ("bom dia","bom dia")
  const compara = "bom dia"==="bom dia"
 return checaStringsMesmoTamanho(string1 , string2)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let frutas =("limao","abacaxi","morango")
return retornaPrimeiroElemento(array).length [-1]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let listaDeNomes = ["joao","maria","paulo","cristiano"]
  return retornaUltimoElemento(array).length[-1]

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