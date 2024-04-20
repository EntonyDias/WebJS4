/*
Este exercício demonstra como usar uma expressão de função para criar uma função anônima.*/


let verificarMaioridade = function(p, l){
    if (p > l){
        return "É de menor"
    } else return "É de maior"
}

console.log(verificarMaioridade(18, 17))