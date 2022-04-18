# Exercicio 01
```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    // Escreva seu código aqui
   let salario = 2000
   let vendasComissao=qtdeCarrosVendidos*100+(valorTotalVendas*0.05)
   let total = salario + vendasComissao
   return total
   }

```
# Exercicio 02

```
function calculaPrecoTotal(quantidade) {
  
        if ( quantidade >=12)
         return quantidade*1.0;
        else 
        return quantidade*1.3;
       }

```

# Exercicio 03

```
function calculaNota(ex, p1, p2) {
 let media= (ex+p1+p2) /3 
  if ( media>=9 ) 
  return "A";
   else if (media >= 7.5) 
  return "B";
   else if( media>= 6) 
  return "C";
   else(media <6 )  
  return "D";
  }
```

# Exercicio 04

```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
  let numeroRepete = 0
  let mensagem;
  
  for (let i=0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      numeroRepete ++
    }
  } 
  
    if (numeroRepete > 0){
      mensagem = `O número ${numeroEscolhido} aparece ${numeroRepete}x`
    } else {
      mensagem = "Número não encontrado"
    }
    
    return  mensagem;
}
```

# Exercicio 05

```
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

const nomeAnimal = animais.map( function (animal){
  return animal.nome;
  
} );
return nomeAnimal ;

}
```
# Exercicio 06 

```
function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]
const TarefaDone = tarefas.filter((tarefa) => {
  return tarefa.status === "done"
 })
 const done = TarefaDone.map((tarefaD) => {
   return tarefaD.titulo
 }) 
 return done
 console.log=done

}

```