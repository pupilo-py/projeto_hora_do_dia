var body = window.document.querySelector("body")
var picture = window.document.querySelector("picture")
var a = window.document.querySelector("a")

a.onmouseout = () => {
    a.style.color = "white"
}

a.ontouchend = () => {
    a.style.color = "white"
    a.style.textDecoration = "none"
}

const preencherZero = s => {
    return ('0' + s).slice(-2);
}

function atualizarHorario() {
    setInterval(() => {
            var hora = new Date().getHours()
            var minuto = new Date().getMinutes()
            var segundo = new Date().getSeconds()
            
            var h2 = window.document.querySelector("h2")
            h2.innerHTML = `Agora são ${preencherZero(hora)}:${preencherZero(minuto)}:${preencherZero(segundo)} do dia`

            verificarPeriodo(hora)
    }, 1000)
}

function verificarPeriodo(h) {
    if (5 < h && h < 12) {
        alterarLayout("manha", "Xícara de Cappuccino")
    } else if (11 < h && h < 18) {
        alterarLayout("tarde", "Pescadores")
    } else {
        alterarLayout("noite", "Fogueira")
    }
}

function alterarLayout(periodo, alt) {
    body.style.backgroundColor = `var(--cor-fundo-${periodo})`
    
    picture.innerHTML = `<source media="(max-width: 456px)" srcset="images/${periodo}-pq.png" type="image/png"><img src="images/${periodo}.png" alt="${alt}">`
    
    a.onmouseenter = () => {
        a.style.color = `var(--cor-link-${periodo})`
    }

    a.ontouchstart = () => {
        a.style.color = `var(--cor-link-${periodo})`
        a.style.textDecoration = "underline"
    }
}