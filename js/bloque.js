import {detectarColision} from './detectarColision.js'

export default class Bloque{
    constructor(juegoAncho, juegoAlto){
        this.juegoAncho = juegoAncho
        this.juegoAlto = juegoAlto
        this.ancho = 30
        this.alto = 10
        this.posicion = {
            x: 0,
            y: 0
        }
        this.aBorrar = false;
    }

    /**
     * @param {CanvasRenderingContext2D} context
     */

    dibujar(context){
        context.fillStyle = 'yellow'
        context.strokeStyle = 'black'
        context.lineWidth = 1
        context.fillRect(this.posicion.x, this.posicion.y, this.ancho, this.alto)
        context.strokeRect(this.posicion.x, this.posicion.y, this.ancho, this.alto)
    }

    actualizar(bola){
        if (detectarColision(bola, this) ){
            bola.velocidad.y *= -1
            console.log('colision con bloque')
            this.aBorrar = true
        }
    }
}