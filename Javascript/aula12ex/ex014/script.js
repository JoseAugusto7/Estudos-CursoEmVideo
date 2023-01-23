function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#CB9D90'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#DC8762'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#152B54'
    }
}

