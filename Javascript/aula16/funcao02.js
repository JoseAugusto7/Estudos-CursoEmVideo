/* function soma(n1, n2) { 
    return n1 + n2  
}
console.log(soma(7, 5)) Se não colocarmos os dois parâmetros a soma vai dar NaN, para resolver esse problema colocamos 'n1=0, n2=0' nos parâmetros da function para o js já saber que se não ouver valor para um dos parâmetros, deve calcular ele como '0', veja o exemplo abaixo */ 

function soma(n1=0, n2=0) { 
    return n1 + n2  
}  

console.log(soma(7))