// Exercícios de interpretação de código //
//  1  //
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
// R a) "Matheus Nachtergaele    //
//       "Virginia Cavendish"    //
//       canal: "Globo", horario: "14h"  //

//  2  //
const cachorro = {
    nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
//  A  //
//  R a)   {nome: "Juca", idade: 3, raca: "SRD}
//  R b)   { nome: "juba", idade: 3, raca: "SRD}
//  R c)   { nome: "Jubo", idade: 3, raca: "SRD}

//  B  // R) Os tres pontos faz uma copia ( Spread )

//  3  //
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
// R a) false  //
//      undefined  //
// R b) Porque a variavel declarada era false  //
//       e a .log "altura " nao existe,nao foi criada. //

//   Exercícios de escrita de código  //

const minhaIdentificacao = {
    nome: "Henrique",
    apelidos: ["rick","rique","dique"]
 }

 function identificar (minhaIdentificacao ){
    }
    console.log("Eu sou", minhaIdentificacao.nome, "mas pode me chamar de:", minhaIdentificacao.apelido)

//  1 b) //
const novosApelidos ={
    ...minhaIdentificacao,
    apelido:["riquinho","Henri","harry"]
}
identificar(minhaIdentificacao)



// 2 a)  //
const cadastro1 = {
    nome: "Maria" ,
    idade: 25,
    profissao: "secretaria" 
}
const cadastro2 = {
    nome: "Cristiano",
    idade: 38,
    profissao: "Professor"
}
// b) //
function listarCadastros (cadastro1,cadastro2){

return [{nome:cadastro1.nome,
tamanhoNome:cadastro1.nome.length,
idade: cadastro1.idade,
profissao:cadastro2.profissao,
tamanhoProfissao:cadastro1.profissao.length},
{nome:cadastro2.nome,
    tamanhoNome:cadastro2.nome.length,
    idade: cadastro2.idade,
    profissao:cadastro2.profissao,
    tamanhoProfissao:cadastro2.profissao.length}]
}

    //  3  //  
// a)  //
    const carrinho=[]
//  b) //
 const sacola1 = {
    nome:"morango",
    disponibilidade: true
    }
 const sacola2 = {
    nome:"abacaxi",
    disponibilidade:true
}
 const sacola3 = { 
    nome: "nectarina",
    disponibilidade:true
}
// c //
function comprar (fruta){
    carrinho.push(fruta) 
}
// d // 
comprar(sacola1)
comprar(sacola2)
comprar (sacola3)
console.log (carrinho) 