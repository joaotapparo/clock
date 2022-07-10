function load(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("image")
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `now it's ${hora} o'clock`
    if (hora >= 0 && hora <= 12) {
        img.src = 'images/day.png'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'images/afternoon.png'
    }
    else {
        img.src = 'images/night.png'
    }
}