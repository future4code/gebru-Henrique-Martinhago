function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    // Escreva seu código aqui
   let salario = 2000
   let vendasComissao=qtdeCarrosVendidos*100+(valorTotalVendas*0.05)
   let total = salario + vendasComissao
   return total
   }