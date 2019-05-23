import Bloque from './bloque.js'
import {JUEGO_ANCHO, JUEGO_ALTO} from './inicio.js'
export const nivel1 = [

    [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 0]
]

export function construirNivel(nivel) {
    let bloques = []
    let cont = 0
    for (let i = 0; i < nivel.length; i++) {
        for (let j = 0; j < nivel[i].length; j++) {
            if (nivel[i][j]==1) {
                console.log('hay bloque')
                bloques.push (new Bloque(JUEGO_ANCHO,JUEGO_ALTO))
                bloques[cont].posicion.x = j * 30
                bloques[cont].posicion.y = i * 10  + 50
                cont++
            }
            
        }

    }

    return bloques

}