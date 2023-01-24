function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert(`Tente novamente`)
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // Para criar um elemento img
        img.setAttribute('id', 'foto')  // Para colocar o id=foto pelo javascript
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.innerHTML = `O resultado é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}