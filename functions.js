function calcular(operacao){
    var valor1 = parseInt(document.getElementById(operacao + "1").value);
    var valor2 = parseInt(document.getElementById(operacao + "2").value);
    var resultado;

    switch(operacao){
        case "Soma":
            resultado = valor1 + valor2;
            document.getElementById("resultadoSoma").value = resultado;
            break;
        case "Subtracao":
            resultado = valor1 - valor2;
            document.getElementById("resultadoSubtracao").value = resultado;
            break;
        case "Multiplicacao":
            resultado = valor1 * valor2;
            document.getElementById("resultadoMultiplicacao").value = resultado;
            break;
        case "Divisao":
            if (valor2 == 0){
                if (valor1 == 0){
                    alert("O resultado dessa divisão é indefinido!");
                }
                else{
                    alert("Não é possível dividir por zero!");
                }
            }
            else{
                resultado = valor1 / valor2;
                document.getElementById("resultadoDivisao").value = resultado;
            }
            break;
        default:
            return;
    }
}

function limparResultado(operacao){
    var resultadoField = document.getElementById("resultado" + operacao);
    var valor1 = document.getElementById(operacao + "1");
    var valor2 = document.getElementById(operacao + "2");
    resultadoField.value = "";
    valor1.value = "";
    valor2.value = "";
}