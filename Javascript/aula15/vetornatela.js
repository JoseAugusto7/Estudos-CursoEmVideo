let valores = [5, 4, 9, 8, 3, 6, 7]

/* for (pos = 0; pos < valores.length; pos++) {
    console.log(`O valor ${valores[pos]} está na posição ${pos}`)
} */

for (let pos in valores) { // Está maneira é mais atualizada.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Para pegar a posição onde está um determinado valor você usa o comando .indexOF(valor), com isso ele vai retornar a posição que está o valor pedido, segue um exemplo:

// Se a resposta for -1 é porque o valor inserido não foi encontrado.

let valor = valores.indexOf(8)
console.log(`O valor 8 está na posição ${valor}`)

let nao = valores.indexOf(1)
console.log(`${nao}`)

