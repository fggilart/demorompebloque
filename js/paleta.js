export default class Paleta{
    constructor(juegoAncho, juegoAlto){
        this.juegoAncho = juegoAncho
        this.juegoAlto = juegoAlto
        this.ancho = 100
        this.alto = 10
        this.posicion = {
            x: this.juegoAncho/2 - this.ancho/2,
            y: this.juegoAlto - this.alto - 15
        }
        this.velocidadMaxima = 3
        this.velocidad = 0
    }

    dibujar(context){
        context.fillStyle = 'blue'
        context.fillRect(this.posicion.x, this.posicion.y, this.ancho, this.alto)
    }

    actualizar(){
        this.posicion.x += this.velocidad

        if(this.posicion.x <= 0){
            this.posicion.x = 0
        }

        if (this.posicion.x + this.ancho > this.juegoAncho){
            this.posicion.x = this.juegoAncho - this.ancho
        }
    }

    moverIzquierda(){
        this.velocidad = - this.velocidadMaxima
    }

    moverDerecha(){
        this.velocidad = this.velocidadMaxima
    }
}