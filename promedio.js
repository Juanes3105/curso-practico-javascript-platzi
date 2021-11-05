function meterValorLista() {
  const input = document.getElementById("inputLista")
  const value = input.value
  lista1.push(Number(value))
  const lista = document.getElementById("lista")
  lista.innerText = lista1
}

const lista1 = [];


function calcularPromedioBtn() {
  const sumaLista = lista1.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  promedio = sumaLista / lista1.length;

  const resultadoP = document.getElementById("Resultado")
  resultadoP.innerText = promedio;
}

  let promedio;
