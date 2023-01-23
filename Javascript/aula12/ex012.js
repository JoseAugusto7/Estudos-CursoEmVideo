var agora = new Date()
var hora = agora.getHours()  // Este comando com o de cima pega a hora atual do sistema.
console.log(`Agora são ${hora}h`)
if (hora < 6) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}