// EXERCICIO 1 

// a) 
//Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?
//  const minhaString:string = 12 //
// R - SE DECLARO QUE A VARIAVEL SERA UMA "STRING" NAO POSSO USAR NUMERO OUTRA FORMA DE DECLARAR, POI ELE NAO ACEITA.

// b) 
// Crie uma variável meuNumero do tipo number e atribua um valor numérico.
// Como fazer para que essa variável também aceite strings? Ou seja, como criamos no 
// typescript uma variável que aceite mais de um tipo de valor?
 // R - Para variavel poder assumir diferentes valores usei UNION TYPE 
//       const meuNumero :string | number = "oi"   

// C) 
//TYPE ALIASES
 /* type pessoa ={
    nome:string ,
    idade: number , 
    corFavorita:string
}   */

//let aluno : pessoa = {
//nome: "Henrique",
// idade: 31,
// corFavorita: "amarelo"
//  }

// D ) d) Modifique a propriedade `corFavorita` para que apenas seja possível
//  escolher entre as cores do arco-íris. Utilize um `enum` para isso.
type pessoa ={
  nome:string ,
 idade: number , 
 // corFavorita: arcoIris
}
enum pessoaCorFavorita{
  AMARELO = "amarelo",
  VERMELHO = " vermelho " ,
  ANIL = " anil" , 
  AZUL = " azul " ,
  VERDE = " verde "
}
const labenuAluno = {
  nome : " rick",
  idade: 31,
  corFavorita: pessoaCorFavorita.AMARELO
}
 console.log(labenuAluno)
