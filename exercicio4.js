//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. 
//Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.



let kmPercorrido = 100
let qtdDias = 5
let precoCarroDia = 60
let precoCarroKm = 0.15
let precoaTotalDias, precoPorKm, precoTotal


precoTotalDias = qtdDias * precoCarroDia
precoPorKm = precoCarroKm * kmPercorrido
precoTotal = precoTotalDias + precoPorKm

console.log(precoTotal)
