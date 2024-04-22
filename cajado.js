function calcularMedia (numeros = [3, 8, 33, 38, 83]){
  configuracao = (acumulador, valorAtual) => acumulador + valorAtual
  total = numeros.reduce(configuracao, 0)
  let media = total/numeros.length;
  console.log(media)
  alert(media)
}