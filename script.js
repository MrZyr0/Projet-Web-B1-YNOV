document.addEventListener("DOMContentLoaded",function(){
    console.log("[DOM] Loaded")

    var player01 = document.querySelectorAll(".Img-Joueur-11")
    var isPlayer01On = false

    var player02 = document.querySelectorAll(".Img-Joueur-12")
    var isPlayer02On = false

    var player03 = document.querySelectorAll(".Img-Joueur-13")
    var isPlayer03On = false

    var player04 = document.querySelectorAll(".Img-Joueur-14")
    var isPlayer04On = false

    var player05 = document.querySelectorAll(".Img-Joueur-15")
    var isPlayer05On = false

    var player06 = document.querySelectorAll(".Img-Joueur-16")
    var isPlayer06On = false

    var player07 = document.querySelectorAll(".Img-Joueur-17")
    var isPlayer07On = false

    var player08 = document.querySelectorAll(".Img-Joueur-18")
    var isPlayer08On = false

    player01.forEach(function(event){
      event.addEventListener("click",highlightP01)
    })

    player02.forEach(function(event){
      event.addEventListener("click",highlightP02)
    })

    player03.forEach(function(event){
      event.addEventListener("click",highlightP03)
    })

    player04.forEach(function(event){
      event.addEventListener("click",highlightP04)
    })

    player05.forEach(function(event){
      event.addEventListener("click",highlightP05)
    })

    player06.forEach(function(event){
      event.addEventListener("click",highlightP06)
    })

    player07.forEach(function(event){
      event.addEventListener("click",highlightP07)
    })

    player08.forEach(function(event){
      event.addEventListener("click",highlightP08)
    })

    function highlightP01()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "drop-shadow(0px 0px 0px #ffef00)"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
      }
      isPlayer01On = true
      isPlayer02On = false
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = false
    }



    function highlightP02()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "drop-shadow(0px 0px 0px #ffef00)"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
      }
      isPlayer01On = false
      isPlayer02On = true
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = false
    }


    function highlightP03()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "drop-shadow(0px 0px 0px #ffef00)"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
      }
      isPlayer01On = false
      isPlayer02On = false
      isPlayer03On = true
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = false
    }

    function highlightP04()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "drop-shadow(0px 0px 0px #ffef00)"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
      }
      isPlayer01On = false
      isPlayer02On = false
      isPlayer03On = false
      isPlayer04On = true
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = false
    }

    function highlightP05()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "drop-shadow(0px 0px 0px #ffef00)"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
      }
      isPlayer01On = false
      isPlayer02On = true
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = true
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = false
    }

    function highlightP06()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "drop-shadow(0px 0px 0px #ffef00)"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
      }
      isPlayer01On = false
      isPlayer02On = false
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = true
      isPlayer07On = false
      isPlayer08On = false
    }

    function highlightP07()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "drop-shadow(0px 0px 0px #ffef00)"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "none"
      }
      isPlayer01On = false
      isPlayer02On = false
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = true
      isPlayer08On = false
    }

    function highlightP08()
    {
      for (var i = 0; i < player01.length; i++) {
        player01[i].style.filter = "none"
      }
      for (var i = 0; i < player02.length; i++) {
        player02[i].style.filter = "none"
      }
      for (var i = 0; i < player03.length; i++) {
        player03[i].style.filter = "none"
      }
      for (var i = 0; i < player04.length; i++) {
        player04[i].style.filter = "none"
      }
      for (var i = 0; i < player05.length; i++) {
        player05[i].style.filter = "none"
      }
      for (var i = 0; i < player06.length; i++) {
        player06[i].style.filter = "none"
      }
      for (var i = 0; i < player07.length; i++) {
        player07[i].style.filter = "none"
      }
      for (var i = 0; i < player08.length; i++) {
        player08[i].style.filter = "drop-shadow(0px 0px 0px #ffef00)"
      }
      isPlayer01On = false
      isPlayer02On = false
      isPlayer03On = false
      isPlayer04On = false
      isPlayer05On = false
      isPlayer06On = false
      isPlayer07On = false
      isPlayer08On = true
    }

})
