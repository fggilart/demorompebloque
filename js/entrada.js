export default class EntradaEvento {
    constructor(paleta) {
        document.addEventListener('keydown', function (evento) {
            //alert(evento.key)

            switch (evento.key) {
                case 'ArrowLeft':
                    // mover izquierda la paleta
                    paleta.moverIzquierda()
                    break
                case 'ArrowRight':
                    // mover derecha la paleta
                    paleta.moverDerecha()
                    break
            }
        })
    }
}