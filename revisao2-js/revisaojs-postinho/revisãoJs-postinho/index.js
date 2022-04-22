
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    
    return ` No comparador de igualdade ${a} == ${b} é ${a == b} `
} 
console.log (checarIgualdade(1,2)) 

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior ( a, b) {

    return ` No verificador de maior  ${a} > ${b} é ${a > b}`
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= false
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

 /* cadastro = () => {
    const usuario = [
        {nomeDoUsario},
        {anoDeNascimento},
        {senhaDoUsuario},
        {nacionalidade},
    ]

    const nomeDoUsario = prompt(" Qual seu nome?")

    const anoDeNascimento = prompt(" Em que ano voce nasceu?")
   
    if (anoDeNascimento >= "2004"){
        return "Bem vindo, voce é maior de idade, pode seguir com seu cadastro ";
    }else { " Voce nao pode seguir com o castro pois é menor de idade"}

    const senhaDoUsuario = prompt(" digite a senha de no minimo 6 caracter")
   
    const nacionalidade = prompt("Voce é de nacionalidade Brasileira ")
    if (nacionalidade === "sim"){
        return "CADASTRO CONCLUIDO COM SUCESSO";
     } else {"Nao concluido, cadastro apenas para pessoas de nacionalidade Brasileira"}
    
     return cadastro
    }  

console.log(cadastro());  */

// Exercício 4-----------------------------------------------------------------------------------------------

 const login = ( ) => {
    const login = "labenu"
    const senha = prompt("Digite a senha com 6 caracter")
    if ( senha ===login ){
        console.log ( "Usuario Logado")
    }else { console.log ("Senha invalida")
    };
    return "login"
}
console.log(login());  

// Exercício 5----------------------------------------------------------------------------------------------------

 primeiraDose = () => {
const nome = prompt  ("Qual seu nome?")
const vacina = prompt(" Diga o nome da vacina que voce tomou")

const vacina1 = "Astrazenica"
const vacina2 = "Pfizer"
const vacina3 = "Coronavac"
let tempo =""
if ( vacina === vacina1 || vacina2){
    return "90 dias"
}else {"28 dias"} 

const proxData1= "90 dias"
let data = ""
if ( tempo === proxData1){
    return "20/07/2022"
}else { "18/05/2022"}    

return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`

}
console.log(primeiraDose());


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

 segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

 avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

/*const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());  */