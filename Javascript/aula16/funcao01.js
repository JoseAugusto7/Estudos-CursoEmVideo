function parimpar(n) {  // Função com parâmetro, n == Parâmetro, essa função precisa de uma ação para funcionar, neste caso a ação é a variável 'num' que foi feita logo abaixo. Também dá para fazer sem uma variável colocando apenas 'console.log(parimpar(8))'.
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
let num = parimpar(8)
console.log(num)

console.log(parimpar(7))