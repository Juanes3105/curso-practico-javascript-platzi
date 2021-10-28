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

  const promedioLista = sumaLista / value.length;

  document.write(`El promedio de esta lista es: ${promedioLista}`)
}
