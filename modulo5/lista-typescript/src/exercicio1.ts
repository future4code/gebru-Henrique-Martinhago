import { Type } from "typescript"


    const separaData = (nome:string, dataNascimento:string) =>{

       nome ="Henrique"
       dataNascimento = "26/01/1991"
       const data : String[] = dataNascimento.split (" / ") 
       
       return (`Olá me chamo ${nome},nasci no dia ${data[0]} do mes de ${data[1]} do ano de ${data [3]}`) 
    }
  
    console.log (separaData)