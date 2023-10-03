function calcularDIFAL() {
    var calculaInterna = document.getElementById('interna')
    var calculaInterestadual = document.getElementById('interestadual')

    var numItem = document.getElementById('item')
    var numCST = document.getElementById('cst')
    var numFrete = document.getElementById('frete')
    var numIPI = document.getElementById('ipi')
    var difal = document.getElementById('valordifal')
    var numerocasasdecimais = 2

    // Impedindo que o usuário deixe campos em branco
    if (
        calculaInterna.value.trim() == '' ||
        calculaInterestadual.value.trim() == '' ||
        numItem.value.trim() == '' ||
        numFrete.value.trim() == '' ||
        numIPI.value.trim() == ''
    ) {
        window.alert('[ERRO DE ESPAÇOS VAZIOS] FALTAM DADOS! Preencha corretamente...')
    } else {
        // Passando os valores de input para as variáveis aceitarem o tipo number em vez de string
        var inter = parseFloat(calculaInterna.value)
        var interes = parseFloat(calculaInterestadual.value)
        var i = parseFloat(numItem.value)
        var c = parseInt(numCST.value)
        var f = parseFloat(numFrete.value)
        var ip = parseFloat(numIPI.value)

        // Declarando ValorNF antes de usá-lo
        var ValorNF = i + f + ip
        var AliqInterna = inter / 100
        // Declarando AliqInterestadual antes de usá-lo
        var AliqInterestadual = interes / 100

        if (
            c !== 4 &&
            c !== 5 &&
            c !== 6 &&
            c !== 7 &&
            c !== 0 &&
            c !== 1 &&
            c !== 2 &&
            c !== 3 &&
            c !== 8
        ) {
            window.alert('[CST INCORRETA!] PREENCHA ESTE CAMPO APENAS COM OS NÚMEROS (0, 1, 2, 3, 4, 5, 6, 7 e 8)');
        } else if (c === 1 || c === 2 || c === 3 || c === 8) {
            // AliqInterestadual === 0.4
            // interes === 4
            d = ValorNF * (AliqInterna - 0.04);
            dformatado = d.toFixed(numerocasasdecimais)
            difal.innerHTML = dformatado
        } else {
            d = ValorNF * (AliqInterna - AliqInterestadual)
            dformatado = d.toFixed(numerocasasdecimais)
            difal.innerHTML = dformatado
        }
    }
}

function Formclean(){
        
    document.getElementById('item').value = ''
    document.getElementById('cst').value = '' 
    document.getElementById('frete').value = ''
    document.getElementById('ipi').value = ''
    document.getElementById('valordifal').value = ''
    
    
}

//função para mudar a cor da página 

document.addEventListener("DOMContentLoaded", function () {
const toggleModeButton = document.getElementById("toggle-mode")
const body = document.body;

toggleModeButton.addEventListener("click", function () {
    body.classList.toggle("light-mode")
})
})
