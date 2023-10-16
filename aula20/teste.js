function somaDoisNumeros(numero1, numero2, fnConsole) {
    
    fnConsole(numero1, false)
    fnConsole(numero2, false)
    fnConsole(numero1 + numero2, true)
}

function printaNumero(numero, eResultado) {

    if(eResultado) {
        console.log(">>> resultado: ", numero)
    } else {
        console.log(">>> número: ", numero)
    }
}

somaDoisNumeros(10, 20, printaNumero)
