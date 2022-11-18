function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours() // Para automatizar com hora local, tirar o comentário.
    var hora = 5 //Retirar para usar a hora local. Usar só o comando acima.
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
      
    } else if (hora >= 12 && hora <18) {
        //Boa tarde!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}