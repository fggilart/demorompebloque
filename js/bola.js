import {detectarColision} from './detectarColision.js'

export default class Bola{
    constructor(juegoAncho, juegoAlto, paleta){
        this.paleta = paleta
        this.juegoAncho = juegoAncho
        this.juegoAlto = juegoAlto
        this.radio = 4
        this.posicion = {
            x: 30,
            y: 10
        }
        this.velocidad = {
            x: 2,
            y: 2
        }
    }
    /**
     * @param {CanvasRenderingContext2D} context
     */
    dibujar(context){
        context.fillStyle = 'red'
        context.beginPath()
        context.arc(this.posicion.x, this.posicion.y, this.radio, 0, Math.PI*2, true)
        context.lineWidth = 0
        context.fill()
    }

    actualizar(){
        this.posicion.x += this.velocidad.x
        this.posicion.y += this.velocidad.y

        // choque con las paredes
        if (this.posicion.x >= (this.juegoAncho - this.radio) || this.posicion.x <= this.radio ){
            this.velocidad.x *= -1
        }

        if (this.posicion.y >= (this.juegoAlto - this.radio) || this.posicion.y <= this.radio ){
            this.velocidad.y *= -1
        }

        if (detectarColision(this, this.paleta)) {
            console.log('colision con paleta')
            this.velocidad.y *= -1
        }

    }
}