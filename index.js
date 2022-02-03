const preencherZero = s => {
    return ('0' + s).slice(-2);
}

function verificarHorario() {
    setInterval(() => {
            var hora = new Date().getHours()
            var minuto = new Date().getMinutes()
            var segundo = new Date().getSeconds()
            var body = window.document.querySelector("body").style
            var picture = window.document.querySelector("picture")
            
            var h2 = window.document.querySelector("h2")
            h2.innerHTML = `Agora são ${preencherZero(hora)}:${preencherZero(minuto)}:${preencherZero(segundo)} do dia`
            
            var a = window.document.querySelector("a")
            a.onmouseout = () => {
                a.style.color = "white"
            }
            a.ontouchend = () => {
                a.style.color = "white"
                a.style.textDecoration = "none"
            }

            if (5 < hora && hora < 12) {
                body.backgroundColor = "var(--cor-fundo-manha)"
                
                picture.innerHTML = '<source media="(max-width: 400px)" srcset="images/manha-pq.png" type="image/png"><img src="images/manha.png" alt="Xícara de Cappuccino">'
                
                a.onmouseenter = () => {
                    a.style.color = "var(--cor-link-manha)"
                }

                a.ontouchstart = () => {
                    a.style.color = "var(--cor-link-manha)"
                    a.style.textDecoration = "underline"
                }
        
            } else if (11 < hora && hora < 18) {
                body.backgroundColor = "var(--cor-fundo-tarde)"
        
                picture.innerHTML = '<source media="(max-width: 400px)" srcset="images/tarde-pq.png" type="image/png"><img src="images/tarde.png" alt="Pescadores">'
        
                a.onmouseenter = () => {
                    a.style.color = "var(--cor-link-tarde)"
                }

                a.ontouchstart = () => {
                    a.style.color = "var(--cor-link-tarde)"
                    a.style.textDecoration = "underline"
                }
        
            } else {
                body.backgroundColor = "var(--cor-fundo-noite)"
                
                picture.innerHTML = '<source media="(max-width: 400px)" srcset="images/noite-pq.png" type="image/png"><img src="images/noite.png" alt="Fogueira">'
                
                a.onmouseenter = () => {
                    a.style.color = "var(--cor-link-noite)"
                }

                a.ontouchstart = () => {
                    a.style.color = "var(--cor-link-noite)"
                    a.style.textDecoration = "underline"
                }
            }
    }, 1000)
}