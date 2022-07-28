function tempo() {
    const data = new Date()

    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()

    hora = atualizar(hora)
    minuto = atualizar(minuto)
    segundo = atualizar(segundo)
    document.querySelector(".relogio").innerHTML = hora + ":" + minuto  + ":" + segundo

    setTimeout(tempo, 1000)

}

function atualizar(t) {
    if (t < 10){
        return "0" + t
    }
    else {
        return t
    }
}
tempo()