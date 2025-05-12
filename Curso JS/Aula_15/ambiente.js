let num = [5, 10, 4]
num.sort((a, b) => a - b)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let pos=0; pos<num.length; pos++){ //Primeira forma
    console.log(num[pos])
}

for (let pos in num){ //Segunda forma, simplificada
    console.log(num[pos])
}


if (num.indexOf(4) == -1){
    console.log('Valor não disponível')
} else {
console.log(`O valor 4 está na posição ${num.indexOf(4)}`) //indexOf() tenta achar em qual posição está tal valor escolhido
}