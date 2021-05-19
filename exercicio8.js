//8 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

//- Se a media for igual ou maior que 7 - Aprovado
//- Se a media for maior e igual a cinco e menor que 7 - Recuperação
//- Se a media for menor que 5 - Reprovado

let nota1 = 10
let nota2 = 10
let nota3 = 5
let  media

media = (nota1 + nota2 + nota3) / 3 // aqui somamos as 3 notas e dividimos por 3(quantidade de notas)

if (media >= 7) {  // se a media for maior que 7, então estará aprovado

    console.log("Aprovado com media: " +media)
}else if(media >=5 && media < 7){

    console.log("Recuperação com media" ,media ) // caso não tenha atendido a condição acima, testará essa, que se for maior ou igual a 5
                                                    //e menor que 7, estará em recuperação
}else{

    console.log("Reprovado com media: " ,media)  // caso não atenda nenhum dos casos acima, estará reprovado.
}
