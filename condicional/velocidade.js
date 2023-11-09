let velocidade = Number(window.prompt("Digite a velocidade que o carro estava:"))
if (velocidade > 80){
    let multa = (velocidade - 80) * 8
    window.alert("Seu carro estava acima da velocidade per mitida em " + (velocidade - 80) + "KM")
    window.alert("Você tera que pagar uma multa de " + multa + " reais" )
}else{
    window.alert("Você está dirigindo na velocidade permitida")
}