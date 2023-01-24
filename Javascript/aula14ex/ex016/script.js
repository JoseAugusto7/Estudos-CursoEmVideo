function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = `Contando:<br> `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            alert('Passo inválido, considerando PASSO 1!!')
            p = 1
        }
           if (i < f) {
            // Contagem crescente
                for (let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c} `
                }
            } else {
                // Contagem regressiva
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `\u{1F449} ${c}`
                }
            }
        }
    }   
        
    
