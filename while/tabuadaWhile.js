let num = Number(window.prompt("Digite um número para saber a sua tabuada"))
let contador = 0
while (contador <= 10){
    console.log(`${num} X ${contador} = ${num * contador}`)
    contador += 1
}