const resultadoCalculo = document.querySelector('.resultado-calculo');


function campoCalculo(valor)
{
 resultadoCalculo.innerHTML += valor;
}

function campoResultado()
{
  resultadoCalculo.innerHTML = eval(resultadoCalculo.innerHTML);
}

function limpar()
{
  resultadoCalculo.innerHTML = null;
}