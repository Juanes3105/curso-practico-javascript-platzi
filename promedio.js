
function calcularPromedio() {
  const input = document.getElementById("lista");
  const value = input.value;

  const sumaLista = value.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / value.length;

  document.write(`El promedio de esta lista es: ${promedioLista}`)
}
