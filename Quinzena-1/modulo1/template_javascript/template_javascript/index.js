//Exercícios de interpretação de código //
let array
console.log('a. ', array)
 // R - a. indefined //

 array = null
console.log('b. ', array)
//R - b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// R - c. 11

let i = 0
console.log('d. ', array[i])
// R - d. 3

array[i+1] = 19
console.log('e. ', array)
// R - e. quantidade de caracteres entre() e trocar o n. 4 pelo n. 19

const valor = array[i+6]
console.log('f. ', valor)
// R - f. 9 //


const frase = prompt("Digite uma frase")

console.log (frase.toUpperCase().replaceAll("A", "I"), frase.length)

// R - Irá imprimir com todas as letras maiusculas, trocar as letras 'a' por 'i' 
//       e contagem de caracteres. // 


//Exercícios de escrita de código //
// 1  //
const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu email?")
console.log ("O email ",email," foi cadastrado com sucesso. Seja bem vindo(a),",nome)

// 2  //
let arrayComidas = ['Lasanha','Polenta','Caldos','Pizza','Feijoada']
console.log (arrayComidas)
console.log ("Essas são as minhas comidas preferidas: ", arrayComidas)



// 3  //

const arrayTarefas = []
let listaDeTarefas1 = prompt('Diga 1* tarefas do seu dia.')
let listaDeTarefas2 = prompt('Diga 2* tarefas do seu dia.')
let listaDeTarefas3 = prompt('Diga 3* tarefas do seu dia.')

arrayTarefas = ("listaDeTarefas1","listaDeTarefas2","listaDeTarefas3")
console.log(arrayTarefas)








