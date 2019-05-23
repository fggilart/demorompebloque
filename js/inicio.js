import Paleta from './paleta.js'
import EntradaEvento from './entrada.js'
import Bola from './bola.js'
import Bloque from './bloque.js'
import { construirNivel, nivel1 } from './niveles.js'

export const JUEGO_ANCHO = 300
export const JUEGO_ALTO = 300

let canvas = document.createElement('canvas')
let context = canvas.getContext('2d')
document.body.append(canvas)

canvas.width = JUEGO_ANCHO
canvas.height = JUEGO_ALTO
canvas.id = 'areaJuego'

let paleta = new Paleta(JUEGO_ANCHO, JUEGO_ALTO)
let bola = new Bola(JUEGO_ANCHO, JUEGO_ALTO, paleta)

let bloques = []
bloques = construirNivel(nivel1)


new EntradaEvento(paleta)


function juegoBucle() {
    // borrar canvas
    context.clearRect(0, 0, JUEGO_ANCHO, JUEGO_ALTO)

    // actualizar paleta
    paleta.actualizar()
    // dibujar paleta
    paleta.dibujar(context)

    bola.dibujar(context)
    bola.actualizar()

    for (let i = 0; i < bloques.length; i++) {
        if (bloques[i].aBorrar == false) {
            bloques[i].dibujar(context)
            bloques[i].actualizar(bola)
        }


    }

    requestAnimationFrame(juegoBucle)
}

juegoBucle()