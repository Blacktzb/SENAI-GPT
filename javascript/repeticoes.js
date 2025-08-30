// for (let contadora = 1; contadora <= 5; contadora++) {

//     console.log (contadora);
// }

// console.log ("While");
// let contadoraWhile = 1;
// while (contadoraWhile <= 5) {

//     console.log (contadoraWhile);

//     contadoraWhile++;

// }

// NIVEL BASICO

function exe01 () { 
    
    for (let contadora = 1; contadora <= 10; contadora++) {

    console.log (contadora);
} 

}



function exe02 () {

    let numero = prompt ("Digite um numero pra mim te mostrar a tabuada dele")
    let i
    let resultado
    for (let i = 1; i <= 10; i++) {
    resultado=numero*i
    alert (`${resultado}`)

}

}




function exe03 () {

    let numero = prompt ("insira qualquer numero")
    let i
    let resultado = 0
    for (let i = 1; i <= numero; i++){
    resultado = resultado+i
    alert(`${resultado}`)
}

}



// NIVEL INTERMEDIARIO

function exe1 () {


    for (let i = 2; i <= 50; i += 2) {
    console.log(i)
}
}



function exe2 () { 

    let numeroSecreto = Math.floor(Math.random()  * 100) + 1

    let palpite = Number(prompt("Adivinhe o número entre 1 e 100"))

    while (palpite !== numeroSecreto) {
    if (palpite < numeroSecreto) {
    palpite = Number(prompt("Muito baixo! Tente novamente:"))
  } else {
    palpite = Number(prompt("Muito alto! Tente novamente:"))
  }
}

alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}`)

}


function exe3 () {

    let numero = Number(prompt("Digite um número para iniciar a contagem regressiva"))

    while (numero >= 0) {
    alert(numero)
    numero--
}
 }

 function logs () {

   let divlogs = document.querySelector (".logs");

   let tagp = document.querySelector ("p") 

   tagp.innerHTML = "Exercicio execultado as" + new Date().toLocaleDateString();

   divlogs.appendChild(tagp);
 }


 ///////////////////////////////////////////////////////////////////////////////////////////

 // BASICO EXERCICIO 1

//  for (let contadora = 1; contadora <=10; contadora++) {
// console.log (contadora)
//  }

// EXERCICIO 2

// let numero = prompt ("insira um numero")
// for (let i = 1; i <=10; i++) {

//     console.log(numero * i)

// }

// EXERCICIO 3

// let numero = Number (prompt("insira um numero"))
// soma = 0 
// i = 1 
// while (i <= numero) {
//     soma = soma + i 
//     alert (soma)
//     i++
    
// }


    

