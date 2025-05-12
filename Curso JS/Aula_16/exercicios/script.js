let lista = []
let escolhidos = document.getElementById('escolhidos')



function Adicionar() {
    let numeroescolhido = parseInt(document.getElementById('numero').value)

    if (numeroescolhido < 1 || numeroescolhido > 100 || isNaN(numeroescolhido)){
        window.alert('Digite um número válido!')
    } else {
    lista.push(numeroescolhido)
    escolhidos.innerHTML = `O número escolhido foi ${numeroescolhido}`
    }
}

function testar(){
    let menor = Math.min(...lista)
    let maior = Math.max(...lista)
    let soma = 0
    for (let i=0; i < lista.length; i++){
        soma += lista[i]
    }
    
    let media = soma / lista.length;


    console.log(lista)
    escolhidos.innerHTML = `Ao todo, temos ${lista.length} números escolhidos<br>
    O menor valor informado foi ${menor}<br>
    O maior valor informado foi ${maior}<br>
    Somando todos os valores, temos ${soma}<br>
    A média dos valores digitados é ${media}
    `
}