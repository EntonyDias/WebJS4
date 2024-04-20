/*Exercício 1: Calcular Média
Escrever uma função que recebe um array de números e retorna a média desses números.
1. A função calcularMedia recebe um parâmetro numeros, que é um array de números.
2. Dentro da função, a soma dos números é calculada usando o método reduce().
3. A média é calculada dividindo a soma pelo número total de elementos no array.
4. O resultado da média é retornado.*/

let numeros = [3, 8, 33, 38, 83];
let valorInicial = 0;

let total = numeros.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual);

console.log(total/numeros.length);