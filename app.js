/*
    This time we want to write calculations using functions and get the results

    Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:
*/

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById('formulario-operaciones');


    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(formulario);

        //console.log(Object.fromEntries(formData));

        manejarFormulario(Object.fromEntries(formData));
    })
})

function manejarFormulario(formData) {
    let funcionNumero2;

    switch (+formData['segundo-numero']) {
        case 0:
            funcionNumero2 = zero();
            break;
        case 1:
            funcionNumero2 = one();
            break;
        case 2:
            funcionNumero2 = two();
            break;
        case 3:
            funcionNumero2 = three();
            break;
        case 4:
            funcionNumero2 = four();
            break;
        case 5:
            funcionNumero2 = five();
            break;
        case 6:
            funcionNumero2 = six();
            break;
        case 7:
            funcionNumero2 = seven();
            break;
        case 8:
            funcionNumero2 = eight();
            break;
        case 9:
            funcionNumero2 = nine();
            break;
        default:
            break;
    }

    //console.log(funcionNumero2);

    let funcionOperacion;

    switch (formData['operacion']) {
        case "suma":
            funcionOperacion = plus(funcionNumero2);
            break;
        case "resta":
            funcionOperacion = minus(funcionNumero2);
            break;
        case "multiplicacion":
            funcionOperacion = times(funcionNumero2);
            break;
        case "division":
            funcionOperacion = dividedBy(funcionNumero2);
            break;
        default:
            break;
    }

    //console.log(funcionOperacion);

    switch (+formData['primer-numero']) {
        case 0:
            zero(funcionOperacion);
            break;
        case 1:
            one(funcionOperacion);
            break;
        case 2:
            two(funcionOperacion);
            break;
        case 3:
            three(funcionOperacion);
            break;
        case 4:
            four(funcionOperacion);
            break;
        case 5:
            five(funcionOperacion);
            break;
        case 6:
            six(funcionOperacion);
            break;
        case 7:
            seven(funcionOperacion);
            break;
        case 8:
            eight(funcionOperacion);
            break;
        case 9:
            nine(funcionOperacion);
            break;
        default:
            break;
    }
}

function updateDOM(number1, number2, operationSign, result) {
    const campoResultado = document.getElementById('campo-resultado');

    campoResultado.innerHTML = `${number1} ${operationSign} ${number2} = ${result}`;
}

function zero(operation = "") {
    let number = 0;

    if (operation === "") {
        return number;
    } else {
        let numberAndOperation = operation;

        let output = doOperation(number, numberAndOperation[0], numberAndOperation[1]);



        updateDOM(number, numberAndOperation[0], numberAndOperation[1], output);
    }
}

function one(operation = "") {
    let number = 1;

    if (operation === "") {
        return number;
    } else {
        let numberAndOperation = operation;

        let output = doOperation(number, numberAndOperation[0], numberAndOperation[1]);

        updateDOM(number, numberAndOperation[0], numberAndOperation[1], output);
    }
}

function two(operation = "") {
    let number = 2;

    if (operation === "") {
        return number;
    } else {
        let numberAndOperation = operation;

        let output = doOperation(number, numberAndOperation[0], numberAndOperation[1]);

        updateDOM(number, numberAndOperation[0], numberAndOperation[1], output);
    }
}

function three(operation = "") {
    let number = 3;

    if (operation === "") {
        return number;
    } else {
        let numberAndOperation = operation;

        let output = doOperation(number, numberAndOperation[0], numberAndOperation[1]);

        updateDOM(number, numberAndOperation[0], numberAndOperation[1], output);
    }
}

function four(operation = "") {
    let number = 4;

    if (operation === "") {
        return number;
    } else {
        let numberAndOperation = operation;

        let output = doOperation(number, numberAndOperation[0], numberAndOperation[1]);

        updateDOM(number, numberAndOperation[0], numberAndOperation[1], output);
    }
}

function five(operation = "") {
    let number = 5;

    if (operation === "") {
        return number;
    } else {
        let numberAndOperation = operation;

        let output = doOperation(number, numberAndOperation[0], numberAndOperation[1]);

        updateDOM(number, numberAndOperation[0], numberAndOperation[1], output);
    }
}

function six(operation = "") {
    let number = 6;

    if (operation === "") {
        return number;
    } else {
        let numberAndOperation = operation;

        let output = doOperation(number, numberAndOperation[0], numberAndOperation[1]);

        updateDOM(number, numberAndOperation[0], numberAndOperation[1], output);
    }
}

function seven(operation = "") {
    let number = 7;

    if (operation === "") {
        return number;
    } else {
        let numberAndOperation = operation;

        let output = doOperation(number, numberAndOperation[0], numberAndOperation[1]);

        updateDOM(number, numberAndOperation[0], numberAndOperation[1], output);
    }
}

function eight(operation = "") {
    let number = 8;

    if (operation === "") {
        return number;
    } else {
        let numberAndOperation = operation;

        let output = doOperation(number, numberAndOperation[0], numberAndOperation[1]);

        updateDOM(number, numberAndOperation[0], numberAndOperation[1], output);
    }
}

function nine(operation = "") {
    let number = 9;

    if (operation === "") {
        return number;
    } else {
        let numberAndOperation = operation;

        let output = doOperation(number, numberAndOperation[0], numberAndOperation[1]);

        updateDOM(number, numberAndOperation[0], numberAndOperation[1], output);
    }
}

function doOperation(number1, number2, operation) {
    let output;
    switch (operation) {
        case "+":
            output = number1 + number2
            break;
        case "-":
            output = number1 - number2
            break;
        case "*":
            output = number1 * number2
            break;
        case "/":
            if (number2 === 0) {
                output = "NaN";
            } else {
                output = Math.trunc(number1 / number2);
            }
            break;
        default:
            break;
    }

    return output;
}

function plus(number) {
    let operation = "+";

    return [number, operation];
}

function minus(number) {
    let operation = "-";

    return [number, operation];
}
function times(number) {
    let operation = "*";

    return [number, operation];
}
function dividedBy(number) {
    let operation = "/";

    return [number, operation];
}
