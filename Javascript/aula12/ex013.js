var agora = new Date()
var diaSem = agora.getDay()
/*
    Em javascript os dias da semana tem valores que são:
    Domingo == 0
    Segunda == 1
    Terça == 2
    Quarta == 3
    Quinta == 4
    Sexta == 5
    Sábado == 6
*/

switch (diaSem) { // É ótimo para resultados fixos (números e strings), para resultados quebrados ou mas versáteis é melhor usar a condição aninhada.
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia inválido')
        break
}