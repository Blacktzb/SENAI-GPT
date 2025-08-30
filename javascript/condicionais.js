// NIVEL BASICO

function exercicio01() {

    let idade = prompt("Qual o seu idade?");

    if (idade >= 18) {
        // BLOCO VERDADEIRO
        alert("Voce e maior de idade");

    } else {
        // Bloco falso
        alert("Va pra super-nani!");

    }

}


function exercicio02() {


    let numero = prompt("Digite um numero");

    if (numero >= 10) {

        alert("o numero e positivo");

    } else {

        alert("o numero e negativo");
    }

}

function exercicio03() {

    let numero = prompt("Digite a nota do aluno");

    if (numero >= 60) {

        alert("Aprovado");

    } else {

        alert("Reprovado");
    }

}


function exercicio04() {

    let n = prompt("Digite um número:");
    if (n > 0) alert("Positivo");
    else if (n < 0) alert("Negativo");
    else alert("Zero");
}



function exercicio05() {

    let idade = prompt("Digite sua idade:");

    if (idade >= 0 && idade <= 12) alert("Você é uma Criança");
    else if (idade >= 13 && idade <= 17) alert("Você é um Adolescente");
    else if (idade >= 18) alert("Você é um Adulto");
    else alert("Idade inválida, insira um número positivo.");


}


function exercicio06() {


    let num = prompt("insira um numero:");

    if (num % 2 == 0) {

        alert("par")
    } else {

        alert("impar")
    }
}


// NIVEL INTERMEDIARIO

function EXERCIO1() {

    let numero1 = Number(prompt("insira o primeiro numero"));
    let numero2 = Number(prompt("insira o segundo numero"));
    let operacao = prompt(" insira a operacao Exemplo: +, -, * ou /");

    if (operacao == "+") {

        let resultado = numero1 + numero2;
        alert(resultado)

    } else {

        if (operacao == "-") {

            let resultado = numero1 - numero2;
            alert(resultado);
        }

    } {

        if (operacao == "*") {

            let resultado = numero1 * numero2;
            alert(resultado);
        }

    } {

        if (operacao == "/") {

            let resultado = numero1 / numero2;
            alert(resultado)

        }
    }
}



function EXERCIO2() {

    let a = parseFloat(prompt("Digite o primeiro número:"));
    let b = parseFloat(prompt("Digite o segundo número:"));
    let c = parseFloat(prompt("Digite o terceiro número:"));


    let maior = a;


    if (b > maior) {
        maior = b;
    }
    if (c > maior) {
        maior = c;
    }

    alert("O maior número é: " + maior);
}












