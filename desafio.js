var inputValorHora = document.querySelector('#valor-hora')
var inputHorasProjeto = document.querySelector('#horas-projeto')

var resultado = document.querySelector('span')

function calcular() {
    var ValorHora = inputValorHora.valueAsNumber
    var HorasProjeto = inputHorasProjeto.valueAsNumber

    var Valor = HorasProjeto * ValorHora
    var valorDuasCasas = Valor.toFixed(2)

   resultado.textContent = 'R$ ' + valorDuasCasas

}
