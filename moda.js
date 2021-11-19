const lista1 = [];
const lista1Count = {};

function meterValorLista() {
  const input = document.getElementById("inputLista")
  const value = input.value
  lista1.push(Number(value))
  const lista = document.getElementById("lista")
  lista.innerText = lista1
}

function calcularModa() {
  


lista1.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1
    }else{
      lista1Count[elemento] = 1;

    }
  }
);

const lista1Array = Object.entries(lista1Count).sort(
  function (valorAcumulado, nuevoValor) {
    valorAcumulado - nuevoValor
  }
);



}