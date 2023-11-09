let r = Number(window.prompt("Digite a razão de sua P.A para mostrarmos os 10 primeiros termos"));
let soma = 0;
for(let i = 0; i < 10; i++){
    soma += r;
    console.log(`O ${i + 1}° da sua P.A é: ${soma}`)
}