console.log("Testando")
/* 
Exercício 1:

Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os seguintes resultados:
1) A maior e a menor altura do grupo;
2) A média de altura dos homens;
3) O número de mulheres;
*/

var pessoas;
var altura;
var sexo;
var maiorAltura = 0;
var menorAltura = 0;
var mulher = 0;
var homem = 0;
var quantidadeDeMulheres = 0;
var quantidadeDeHomens = 0;
var mediaAlturaHomens = 0;

// O número de mulheres:
for(var pessoas=0; pessoas<4; pessoas++) {
    var altura = parseFloat(prompt("Informe qual é a sua altura: "));
    var sexo = prompt("Qual é o seu sexo?");

    if(sexo == "f") {
        quantidadeDeMulheres = quantidadeDeMulheres + 1;
    }else if(sexo == "m"){
        quantidadeDeHomens = quantidadeDeHomens + 1;
        quantidadeDeHomens = quantidadeDeHomens + altura;
    }

// Maior e menor altura entre as 15 pessoas:
if(pessoas == 1){
    menorAltura = altura;
}if(altura > maiorAltura){
    maiorAltura = altura;
}if(altura < menorAltura){
    menorAltura = altura;
}

// Média das alturas dos homens 
if(quantidadeDeHomens > 0) {
    mediaAlturaHomens = (homem/quantidadeDeHomens);
}
}

console.log("A maior altura entre as 15 pessoas é",maiorAltura,"e a menor altura é",menorAltura)
console.log("A média de altura dos homens entre as 15 pessoas foi de:", mediaAlturaHomens)
console.log("A quantidade de mulheres entre as 15 pessoas é:", quantidadeDeMulheres)
