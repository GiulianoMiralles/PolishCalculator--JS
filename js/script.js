const btnCalcular = document.getElementById('btn-calcular'); // obtengo el elemento boton calcular y lo asigno a una constante

function calcular() {
    const input = document.getElementById('input').value.split(' '); // obtengo el elemento input y su valor y luego lo separo por espacios
    let operadores = ["+", "-", "*", "/", "%"],
        pila = [],
        op;

    // Elimino los valores de uno del inicio
    while (op = input.shift()) {
        // verifico si op es de tipo numerico
        if (op == +op) {
            pila.push(op);

            // Busco operadores en la ecuacion si es distinto a -1 quiere decir que no hay operadores
        } else if (operadores.indexOf(op) !== -1) {
            let num2 = pila.pop(), // quito el ultimo elemento numerico de la lista y lo asigno a una variable
                num1 = pila.pop(),
                resultado = eval(num1 + op + num2);

            pila.push(resultado); // agrego el resultado a la pila
            document.getElementById('output').value = 'El resultado es: ' + resultado; // Muestro el resultado en el input de salida
        } else {
            throw Error("Expresion invalida: " + input); // control de errores si no entra en los otros 2 if devuelve error en consola
        }
    }
    return pila.pop();
}

btnCalcular.addEventListener('click', calcular); // evento que dispara la funcion calcular