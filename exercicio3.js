// 3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.


let valorJantar = 120 // valor do jantar
let taxaGarcom = 10 //taxa de gorjeta - garçom
let calculo, valorPago // declarando variaveis de calculo da porcentagem e valor a ser pago

calculo = (10/100) * 120 // calculo que será acrescido ao valor do jantar

valorPago = calculo + valorJantar 

console.log(valorPago) // imprimindo na tela o valor a ser pago
