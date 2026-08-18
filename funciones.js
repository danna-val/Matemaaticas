function calcular() {

    let num1 = Number(document.getElementById("num1").value);
    let den1 = Number(document.getElementById("den1").value);

    let num2 = Number(document.getElementById("num2").value);
    let den2 = Number(document.getElementById("den2").value);

    let operacion = document.getElementById("operacion").value;

    if (den1 === 0 || den2 === 0) {
       alert("El denominador no puede ser 0");
        return;
    }

    let numerador;
    let denominador;

    if (operacion === "+") {
        numerador = (num1 * den2) + (num2 * den1);
        denominador = den1 * den2;
    }

    else if (operacion === "-") {
        numerador = (num1 * den2) - (num2 * den1);
        denominador = den1 * den2;
    }

    else if (operacion === "*") {
        numerador = num1 * num2;
        denominador = den1 * den2;
    }

    else if (operacion === "/") {

        if (num2 === 0) {
            alert("No se puede dividir entre 0");
            return;
        }

        numerador = num1 * den2;
        denominador = den1 * num2;
    }

    let resultado = numerador / denominador;

    document.getElementById("resultado").innerHTML = resultado;
}