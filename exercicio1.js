// 1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.


let precoMercadoria = 250.00 //preco da mercadoria
let percentualDesconto = 20 // percentual de desconto
let calculo, precoPago // aqui temos duas variaveis, uma que calcula o valor que terá de desconto, e outra que diz o real preço a ser pago

calculo = (20/100) * 250 // calculando o valor de desconto


precoPago = precoMercadoria - calculo //calculo do real preço a ser pago

console.log(precoPago) // imprimindo o resultado 


