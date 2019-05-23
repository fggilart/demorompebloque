export function detectarColision(bola, objeto){

    let ladoInferiorBola = bola.posicion.y + bola.radio
    let ladoSuperiorBola = bola.posicion.y - bola.radio
    let ladoIzquierdoBola = bola.posicion.x - bola.radio
    let ladoDerechoBola = bola.posicion.x + bola.radio

    let ladoSuperiorObjeto = objeto.posicion.y
    let ladoIzquierdoObjeto = objeto.posicion.x
    let ladoDerechoObjeto = objeto.posicion.x + objeto.ancho
    let ladoInferiorObjeto = objeto.posicion.y + objeto.alto

    if (ladoInferiorBola >= ladoSuperiorObjeto &&
        ladoSuperiorBola <= ladoInferiorObjeto &&
        ladoIzquierdoBola >= ladoIzquierdoObjeto &&
        ladoDerechoBola <= ladoDerechoObjeto) {
        
        return true
    }
    else{
        return false
    }

}